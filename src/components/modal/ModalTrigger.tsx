import React from "react";
import { useModal } from "../../hooks/UseModal";

type ModalTriggerProps = {
  asChild?: boolean;
  children?: React.ReactElement;
};
export function ModalTrigger({ asChild, children }: ModalTriggerProps) {
  const { openModal } = useModal();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: openModal,
      className:
        "text-white bg-blue-600 rounded-md px-2 py-3 w-full hover:to-blue-400",
    });
  }
  return (
    <button
      className="text-white bg-blue-600 rounded-md px-2 py-3 w-full hover:to-blue-400 cursor-pointer"
      onClick={openModal}>
      open
    </button>
  );
}
