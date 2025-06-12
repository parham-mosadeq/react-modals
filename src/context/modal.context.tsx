import { useState, type PropsWithChildren } from "react";
import { ModalCtx } from "./modalCtx";

type ModalContextProps = PropsWithChildren;
export default function ModalContext({ children }: ModalContextProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const value = {
    openModal,
    closeModal,
    isOpen,
  };

  return <ModalCtx.Provider value={value}>{children}</ModalCtx.Provider>;
}
