import { createContext, useContext, type ReactNode } from "react";

type DialogContextType = {
  registerContent: (id: string, content: ReactNode) => void;
  unregisterContent: (id: string) => void;
  open: (id: string) => void;
  close: () => void;
  stack: string[];
};

export const DialogContext = createContext<DialogContextType | null>(null);

export function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("");
  return ctx;
}
