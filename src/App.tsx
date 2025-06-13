import { Dialog } from "./components/modal/Modal.atom";
import { DialogProvider } from "./context/ModalProvider";
import { useDialog } from "./hooks/useDialog";

const ModalOne = () => {
  const { open, close } = useDialog();
  return (
    <>
      <h2 className="text-xl font-bold">Modal One</h2>
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => open("modal2")}>
        Open Modal Two (Nested)
      </button>
      <button
        className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
        onClick={() => close()}>
        Close Modal One
      </button>
    </>
  );
};

const ModalTwo = () => {
  const { close } = useDialog();
  return (
    <>
      <h2 className="text-xl font-bold">Modal Two</h2>
      <button
        className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
        onClick={() => close()}>
        Close Modal Two
      </button>
    </>
  );
};

const App = () => (
  <>
    <div id="modal-root" />
    <DialogProvider>
      <Dialog.Trigger modalId="modal1">
        <button className="rounded bg-green-500 px-4 py-2 text-white">
          Open Modal One
        </button>
      </Dialog.Trigger>

      <Dialog.Content id="modal1">
        <ModalOne />
      </Dialog.Content>

      <Dialog.Content id="modal2">
        <ModalTwo />
      </Dialog.Content>
    </DialogProvider>
  </>
);
export default App;
