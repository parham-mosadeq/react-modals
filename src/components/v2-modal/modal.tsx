import {
  createContext,
  useContext,
  useRef,
  type PropsWithChildren,
  type RefObject,
} from "react";
import { useV2Context } from "../../context/v2";
type V2CtxType = { id: string; currentModal: RefObject<HTMLDivElement> | null };
const V2Ctx = createContext<V2CtxType>({
  id: "",
  currentModal: null,
});

function UseV2ModalCts() {
  const ctx = useContext(V2Ctx);
  if (!ctx) return;
  return ctx;
}

export function ModalV2(props: PropsWithChildren & { id: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <V2Ctx.Provider value={{ id: props.id, currentModal: ref }}>
        <div ref={ref}>{props.children}</div>;
      </V2Ctx.Provider>
    </>
  );
}

export function ModalTrigger() {
  const { registerModal } = useV2Context();
  const { id, currentModal } = UseV2ModalCts()!;

  return (
    <button onClick={() => registerModal(id, currentModal)}>open/close</button>
  );
}

export function ModalContent(props: PropsWithChildren) {
  return <div className="bg-red-200">{props.children}</div>;
}

ModalV2.ModalTrigger = ModalTrigger;
ModalV2.ModalContent = ModalContent;
ModalV2.displayName = "Modal";
