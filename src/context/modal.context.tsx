import { useState, type PropsWithChildren } from "react";
import { ModalCtx } from "./modalCtx";
import { UseManager } from "../hooks/UseManager";

type ModalContextProps = PropsWithChildren;
export default function ModalContext({ children }: ModalContextProps) {
  const { registerModal, unRegisterModal } = UseManager();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  const openModal = () => {
    setIsOpen(true);
    registerModal(id);
  };

  const closeModal = () => {
    setIsOpen(false);
    unRegisterModal(id);
  };

  console.log("==== Modal CTX =>", "isOpen", isOpen);
  const value = {
    openModal,
    closeModal,
    isOpen,
    id,
    setId,
  };

  return <ModalCtx.Provider value={value}>{children}</ModalCtx.Provider>;
}
