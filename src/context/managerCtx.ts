import { createContext } from "react";

type ModalManagerCtxTypes = {
  modals: string[];
  registerModal: (modalKey: string) => void;
  unRegisterModal: (modalKey: string) => void;
};
export const ModalManagerCtx = createContext<ModalManagerCtxTypes | null>(null);
