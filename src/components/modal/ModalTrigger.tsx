import React, { useId } from "react";
import { useModal } from "../../hooks/UseModal";

type ModalTriggerProps = {
  asChild?: boolean;
  children?: React.ReactElement;
};
export function ModalTrigger({ asChild, children }: ModalTriggerProps) {
  const id = useId();
  const { openModal, setId } = useModal();
  const handleClick = () => {
    setId(id);
    openModal();
  };
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      className:
        "text-white bg-blue-600 rounded-md px-2 py-3 w-full hover:to-blue-400",
    });
  }
  return (
    <button
      className="text-white bg-blue-600 rounded-md px-2 py-3 w-full hover:to-blue-400 cursor-pointer"
      onClick={handleClick}>
      open
    </button>
  );
}
