import type { PropsWithChildren } from "react";
import { ModalTrigger } from "./ModalTrigger";
import ModalContent from "./ModalContent";
import ModalContext from "../../context/modal.context";

type ModalProps = PropsWithChildren;
export function Modal({ children }: ModalProps) {
  return (
    <ModalContext>
      <div>{children}</div>;
    </ModalContext>
  );
}

Modal.ModalTrigger = ModalTrigger;
Modal.ModalContent = ModalContent;
