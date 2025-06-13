import { useState, type ReactNode } from "react";
import { ModalWrapper } from "../components/modal/ModalWrapper";
import { Portal } from "../components/portal/portal.atom";
import { DialogContext } from "../hooks/useDialog";

type ModalRegistry = Record<string, ReactNode>;

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  // Registered modals: id => content
  const [registry, setRegistry] = useState<ModalRegistry>({});
  // Stack of opened modal IDs
  const [stack, setStack] = useState<string[]>([]);

  // Register modal content
  const registerContent = (id: string, content: ReactNode) => {
    setRegistry((prev) => ({ ...prev, [id]: content }));
  };

  const unregisterContent = (id: string) => {
    setRegistry((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const open = (id: string) => {
    if (!registry[id]) {
      console.warn(`Dialog.Content with id "${id}" not found`);
      return;
    }
    setStack((prev) => [...prev, id]);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setStack((prev) => {
      const next = prev.slice(0, -1);
      if (next.length === 0) {
        document.body.style.overflow = "";
      }
      return next;
    });
  };

  return (
    <DialogContext.Provider
      value={{ registerContent, unregisterContent, open, close, stack }}>
      {children}
      {stack.map((id, index) => (
        <Portal>
          <ModalWrapper
            key={id + index}
            onClose={close}
            zIndex={50 + index * 10}>
            {registry[id]}
          </ModalWrapper>
          ,
        </Portal>
      ))}
    </DialogContext.Provider>
  );
};
