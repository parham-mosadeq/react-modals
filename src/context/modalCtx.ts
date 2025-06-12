import React from "react";

export const ModalCtx = React.createContext({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});
