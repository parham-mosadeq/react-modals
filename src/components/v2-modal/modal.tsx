import React, {
  createContext,
  useContext,
  type PropsWithChildren,
} from "react";
import { useV2Context } from "../../context/v2";
type ModalV2ContextType = {
  id: string;
  openModal: () => void;
  closeModal: () => void;
};

const ModalV2Context = createContext<ModalV2ContextType | null>(null);

function useModalV2Context() {
  const ctx = useContext(ModalV2Context);
  if (!ctx) throw new Error("useModalV2Context must be used inside ModalV2");
  return ctx;
}

export function ModalV2({ id, children }: PropsWithChildren<{ id: string }>) {
  const { registerModal, unregisterModal, openModal, closeModal } =
    useV2Context();

  // Register the modal content on mount, unregister on unmount
  // Here children is the modal content
  React.useEffect(() => {
    registerModal(id, children);
    return () => unregisterModal(id);
  }, [id, children, registerModal, unregisterModal]);

  // Provide openModal/closeModal helpers via context for children
  return (
    <ModalV2Context.Provider
      value={{
        id,
        openModal: () => openModal(id),
        closeModal: () => closeModal(id),
      }}>
      {children}
    </ModalV2Context.Provider>
  );
}

export function ModalTrigger({ children }: PropsWithChildren<{}>) {
  const { openModal } = useModalV2Context();
  return <button onClick={openModal}>{children}</button>;
}

export function ModalContent({ children }: PropsWithChildren<{}>) {
  // This component itself doesn't control visibility
  // Modal content is rendered inside V2 provider portal when open
  return <>{children}</>;
}

// Attach compound components
ModalV2.ModalTrigger = ModalTrigger;
ModalV2.ModalContent = ModalContent;
