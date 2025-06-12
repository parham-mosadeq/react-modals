import FormModal from "./components/form-modal/FormModal";
import ModalManager from "./context/ModalManager";

export default function App() {
  return (
    <ModalManager>
      <div>
        <FormModal />
      </div>
    </ModalManager>
  );
}
