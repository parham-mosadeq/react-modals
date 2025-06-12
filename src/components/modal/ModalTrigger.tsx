import React from "react";
import { useModal } from "../../hooks/UseModal";

type ModalTriggerProps = {
  asChild: boolean;
  children: React.ReactElement;
};
export function ModalTrigger({ asChild, children }: ModalTriggerProps) {
  const { openModal } = useModal();

  if (asChild) {
    return React.cloneElement(children, {
      onClick: () => openModal(),
    });
  }
  return <button onClick={() => openModal()}>open</button>;
}
