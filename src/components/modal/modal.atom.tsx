import {
  useEffect,
  useId,
  type PropsWithChildren,
  isValidElement,
  cloneElement,
} from "react";
import { useModalManager } from "../../context/modal.context";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const { registerModal, unregisterModal } = useModalManager();
  const id = useId();

  const delayCall = (cb: () => void) =>
    setTimeout(() => {
      cb();
    }, 300);

  useEffect(() => {
    if (isOpen) {
      let content: React.ReactElement<
        unknown,
        string | React.JSXElementConstructor<unknown>
      > | null = null;

      if (isValidElement(children)) {
        const props =
          typeof children.props === "function" && "onClick" in children.props
            ? { ...children.props, onClick: onClose }
            : {};
        content = cloneElement(children, props);
      }

      delayCall(() =>
        registerModal(
          id,
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            aria-modal="true"
            role="dialog">
            <div
              className="fixed inset-0 bg-black opacity-10 backdrop-blur-sm transition-opacity"
              onClick={() => delayCall(onClose)}
            />
            <div
              className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6 z-10
                      transform transition-all duration-300 ease-in-out
                      scale-100 opacity-100">
              {content}
            </div>
          </div>
        )
      );
    } else {
      delayCall(() => unregisterModal(id));
    }

    return () => unregisterModal(id);
  }, [isOpen, id, registerModal, unregisterModal, children, onClose]);

  return null;
}
