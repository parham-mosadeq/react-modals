import { useState, type PropsWithChildren } from "react";
import { ModalManagerCtx } from "./managerCtx";

type ModalManagerProps = PropsWithChildren;
export default function ModalManager({ children }: ModalManagerProps) {
  const [modals, setModals] = useState<string[]>([]);
  const registerModal = (key: string) => {
    setModals((prev) => {
      if (prev.includes(key)) {
        return prev;
      } else {
        return [...prev, key];
      }
    });
  };

  const unRegisterModal = (key: string) => {
    const filteredModals = modals.filter((modalKey) => modalKey !== key);
    setModals(filteredModals);
  };

  const value = { registerModal, unRegisterModal, modals };
  return (
    <ModalManagerCtx.Provider value={value}>
      {children}
    </ModalManagerCtx.Provider>
  );
}
