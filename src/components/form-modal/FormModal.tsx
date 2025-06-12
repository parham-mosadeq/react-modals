import { Modal } from "../modal/modal.atom";

export default function FormModal() {
  return (
    <Modal>
      <Modal.ModalTrigger asChild>
        <button>open form modal</button>
      </Modal.ModalTrigger>

      <Modal.ModalContent>
        <div>
          <input placeholder="name" />
        </div>
        <div>
          <input placeholder="lastName" />
        </div>
      </Modal.ModalContent>
    </Modal>
  );
}
