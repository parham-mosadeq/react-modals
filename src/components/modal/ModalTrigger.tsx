import React from "react";

type ModalTriggerProps = {
  asChild: boolean;
  children: React.ReactElement;
};
export function ModalTrigger({ asChild, children }: ModalTriggerProps) {
  if (asChild) {
    return React.cloneElement(children, {
      onClick: () => console.log("Modal Trigger Clicked"),
    });
  }
  return <button onClick={() => {}}>open</button>;
}
