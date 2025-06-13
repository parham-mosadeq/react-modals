import React, { useEffect, type ReactElement, type ReactNode } from "react";
import { useDialog } from "../../hooks/useDialog";

export const Dialog = {
  Trigger: ({
    children,
    modalId,
  }: {
    children: ReactElement;
    modalId: string;
  }) => {
    const { open } = useDialog();

    return React.cloneElement(children, {
      onClick: () => open(modalId),
    });
  },

  Content: ({ children, id }: { children: ReactNode; id: string }) => {
    const { registerContent, unregisterContent } = useDialog();

    useEffect(() => {
      registerContent(id, children);
      return () => unregisterContent(id);
    }, [children, id, registerContent, unregisterContent]);

    return null;
  },
};
