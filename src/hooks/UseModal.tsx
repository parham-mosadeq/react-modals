import React from "react";
import { ModalCtx } from "../context/modalCtx";

export function useModal() {
  const context = React.useContext(ModalCtx);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
