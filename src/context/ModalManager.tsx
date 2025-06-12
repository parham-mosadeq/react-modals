import { createContext, useState } from "react";

type ModalManagerCtxTypes = {
  modals: string[];
  registerModal: (modalKey: string) => void;
  unRegisterModal: (modalKey: string) => void;
};
export const ModalManagerCtx = createContext<ModalManagerCtxTypes | null>(null);

export default function ModalManager() {
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
      ModalManager
    </ModalManagerCtx.Provider>
  );
}
