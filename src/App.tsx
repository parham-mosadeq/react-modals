import { Modal } from "./components/modal/modal.atom";
import ModalManager from "./context/ModalManager";

export default function App() {
  return (
    <ModalManager>
      <div>
        <Modal>
          <Modal.ModalTrigger />
          <Modal.ModalContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            praesentium.
          </Modal.ModalContent>
        </Modal>
      </div>
    </ModalManager>
  );
}
