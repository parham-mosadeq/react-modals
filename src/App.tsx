// import { useState } from "react";
// import { ModalManagerProvider } from "./context/modal.context";
// import { Modal } from "./components/modal/modal.atom";

import { ModalV2 } from "./components/v2-modal/modal";
import { V2 } from "./context/v2";

export default function App() {
  // const [isOpen1, setIsOpen1] = useState(false);
  // const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div>
      he
      <V2>
        hiiiiiii
        <ModalV2 id="myModal">
          <ModalV2.ModalTrigger></ModalV2.ModalTrigger>
          <ModalV2.ModalContent>
            <h2>This is modal content</h2>
            <p>Use the compound components to organize modal UI.</p>
          </ModalV2.ModalContent>
        </ModalV2>
      </V2>
    </div>
    // <ModalManagerProvider>
    //   <button onClick={() => setIsOpen1(true)}>Open Modal 1</button>
    //   <button onClick={() => setIsOpen2(true)}>Open Modal 2</button>

    //   <Modal isOpen={isOpen1} onClose={() => setIsOpen1(false)}>
    //     <div className="bg-white p-6 rounded-xl shadow-xl">
    //       <h2>Modal 1</h2>
    //       <p>Content for modal 1</p>
    //       <button onClick={() => setIsOpen1(false)}>Close</button>
    //       <button onClick={() => setIsOpen3(true)}>open 3</button>
    //     </div>
    //   </Modal>
    //   <Modal isOpen={isOpen3} onClose={() => setIsOpen3(false)}>
    //     <div className="bg-white p-6 rounded-xl shadow-xl">
    //       <h2>Modal 3</h2>
    //       <p>Content for modal 3</p>
    //       <button onClick={() => setIsOpen3(false)}>Close</button>
    //     </div>
    //   </Modal>

    //   <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
    //     <div className="bg-white p-6 rounded-xl shadow-xl">
    //       <h2>Modal 2</h2>
    //       <p>Content for modal 2</p>
    //       <button onClick={() => setIsOpen2(false)}>Close</button>
    //     </div>
    //   </Modal>
    // </ModalManagerProvider>
  );
}
