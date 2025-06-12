import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  containerId?: string;
};

export function Portal({ children, containerId = "portal" }: PortalProps) {
  const defaultNodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let node = document.getElementById(containerId);

    if (!node) {
      node = document.createElement("div");
      node.setAttribute("id", containerId);
      document.body.appendChild(node);
    }
    defaultNodeRef.current = node;
  }, [containerId]);

  if (!defaultNodeRef.current) return null;

  return createPortal(children, defaultNodeRef.current);
}
