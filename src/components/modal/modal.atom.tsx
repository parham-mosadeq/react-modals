import type { PropsWithChildren } from "react";
import { ModalTrigger } from "./ModalTrigger";
import ModalContent from "./ModalContent";

type ModalProps = PropsWithChildren;
export function Modal({ children }: ModalProps) {
  return <div>{children}</div>;
}

Modal.ModalTrigger = ModalTrigger;
Modal.ModalContent = ModalContent;
