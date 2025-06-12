import React from "react";

type ModalCtxType = {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
  id?: string;
  setId?: (modalId: string) => void;
};

export const ModalCtx = React.createContext<ModalCtxType | null>(null);
