import { Modal } from "./components/modal/modal.atom";

export default function App() {
  return (
    <div>
      <Modal>
        <Modal.ModalTrigger />
        <Modal.ModalContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          praesentium.
        </Modal.ModalContent>
      </Modal>
    </div>
  );
}
