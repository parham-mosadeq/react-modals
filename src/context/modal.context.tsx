import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
  type PropsWithChildren,
} from "react";
import { Portal } from "../components/portal/portal.atom";

type ModalManagerContextType = {
  registerModal: (id: string, node: ReactNode) => void;
  unregisterModal: (id: string) => void;
};

const ModalManagerContext = createContext<ModalManagerContextType | null>(null);

export function useModalManager() {
  const ctx = useContext(ModalManagerContext);
  if (!ctx)
    throw new Error("useModalManager must be used within ModalManagerProvider");
  return ctx;
}

export function ModalManagerProvider({ children }: PropsWithChildren) {
  const [modals, setModals] = useState<Record<string, ReactNode>>({});

  const registerModal = useCallback((id: string, node: ReactNode) => {
    setModals((prev) => ({ ...prev, [id]: node }));
  }, []);

  const unregisterModal = useCallback((id: string) => {
    setModals((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }, []);

  const keys = Object.keys(modals);
  const maxZIndex = 50 + keys.length * 10;

  return (
    <ModalManagerContext.Provider value={{ registerModal, unregisterModal }}>
      {children}
      <Portal>
        {keys.map((key, index) => {
          const zIndex = 50 + index * 10;
          const isTop = zIndex === maxZIndex;
          return (
            <div
              key={key}
              className="fixed inset-0 flex items-center justify-center"
              style={{ zIndex }}>
              {isTop && (
                <div
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => unregisterModal(key)}
                />
              )}
              <div className="relative max-w-lg w-full mx-4">{modals[key]}</div>
            </div>
          );
        })}
      </Portal>
    </ModalManagerContext.Provider>
  );
}
