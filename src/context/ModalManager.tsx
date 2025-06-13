import { useState, type PropsWithChildren } from "react";
import { ModalManagerCtx } from "./managerCtx";

type ModalManagerProps = PropsWithChildren;
export default function ModalManager({ children }: ModalManagerProps) {
  const [modals, setModals] = useState<string[]>([]);
  const registerModal = (key: string) => {
    console.log(key);
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
  console.log("--- modals", modals);
  const value = { registerModal, unRegisterModal, modals };
  return (
    <ModalManagerCtx.Provider value={value}>
      {children}
      {modals.map((modal) => {
        return (
          <div key={modal}>
            {modal}
            hello wrold
          </div>
        );
      })}
    </ModalManagerCtx.Provider>
  );
}
