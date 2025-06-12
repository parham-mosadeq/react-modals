import { useContext } from "react";
import { ModalManagerCtx } from "../context/managerCtx";

export function UseManager() {
  const ctx = useContext(ModalManagerCtx);
  if (!ctx) throw new Error("Not valid ctx");
  return ctx;
}
