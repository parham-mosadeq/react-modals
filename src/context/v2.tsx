import {
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

  const registerModal = useCallback((id: string, modal: ReactNode) => {
    setModals((prev) => ({ ...prev, [id]: modal }));
  }, []);

  const unregisterModal = useCallback((id: string) => {
    setModals((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }, []);

  return (
    <V2Context.Provider
      value={{
        registerModal,
        unregisterModal,
      }}>
      {children}
      <Portal>
        {Object.entries(modals).map(([id, modal]) => (
          <div
            key={id}
            id={`modal-container-${id}`}
            className="fixed inset-0 bg-black/50 flex justify-center items-center"
            onClick={() => unregisterModal(id)}>
            <div
              className="bg-white rounded-lg p-6 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}>
              {modal}
            </div>
          </div>
        ))}
      </Portal>
    </V2Context.Provider>
  );
}
