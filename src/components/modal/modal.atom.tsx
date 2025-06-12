import type { PropsWithChildren } from "react";
import { ModalTrigger } from "./ModalTrigger";
import ModalContent from "./ModalContent";
import ModalContext from "../../context/modal.context";

type ModalProps = PropsWithChildren;
export function Modal({ children }: ModalProps) {
  return (
    <ModalContext>
      <div className="w-[500px] bg-slate-400 px-2 py-3 rounded-md">
        {children}
      </div>
      ;
    </ModalContext>
  );
}

Modal.ModalTrigger = ModalTrigger;
Modal.ModalContent = ModalContent;
