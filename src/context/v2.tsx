import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { Portal } from "../components/portal/portal.atom";

type V2ContextType = {
  registerModal: (id: string, modal: ReactNode) => void;
  unregisterModal: (id: string) => void;
};

export const V2Context = createContext<V2ContextType | null>(null);

export function useV2Context() {
  const ctx = useContext(V2Context);
  if (!ctx) {
    throw new Error("useV2Context must be used within V2 provider");
  }
  return ctx;
}

type V2Props = {
  children: ReactNode;
};
export function V2({ children }: V2Props) {
  const [modals, setModals] = useState<Record<string, ReactNode>>({});
  const [openModals, setOpenModals] = useState<Set<string>>(new Set());

  const registerModal = useCallback((id: string, modal: ReactNode) => {
    setModals((prev) => ({ ...prev, [id]: modal }));
  }, []);

  const unregisterModal = useCallback((id: string) => {
    setModals((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
    setOpenModals((prev) => {
      const copy = new Set(prev);
      copy.delete(id);
      return copy;
    });
  }, []);

  const openModal = useCallback((id: string) => {
    setOpenModals((prev) => new Set(prev).add(id));
  }, []);

  const closeModal = useCallback((id: string) => {
    setOpenModals((prev) => {
      const copy = new Set(prev);
      copy.delete(id);
      return copy;
    });
  }, []);

  return (
    <V2Context.Provider
      value={{ registerModal, unregisterModal, openModal, closeModal }}>
      {children}
      <Portal>
        {Array.from(openModals).map((id) => {
          const modal = modals[id];
          if (!modal) return null;
          return (
            <div
              key={id}
              id={`modal-container-${id}`}
              className="fixed inset-0 bg-black/50 flex justify-center items-center"
              onClick={() => closeModal(id)}>
              <div
                className="bg-white rounded-lg p-6 max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}>
                {modal}
              </div>
            </div>
          );
        })}
      </Portal>
    </V2Context.Provider>
  );
}
