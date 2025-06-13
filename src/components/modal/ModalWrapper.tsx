import { useEffect, useState, type ReactNode } from "react";

export const ModalWrapper = ({
  children,
  onClose,
  zIndex,
}: {
  children: ReactNode;
  onClose: () => void;
  zIndex: number;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", escHandler);
    requestAnimationFrame(() => setVisible(true));

    return () => window.removeEventListener("keydown", escHandler);
  }, [onClose]);

  const closeWithAnimation = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex }}>
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeWithAnimation}
      />
      <div
        className={`relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 max-w-lg w-full transition-all duration-200 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
        {children}
      </div>
    </div>
  );
};
