import ProviderPicker from "./context/pickerContext";
import Header from "./components/Header";
import Board from "./components/Board";
import "./App.js";
import Button from "./components/Button";
import useModal from "./Hooks/useModal";
import Modal from "./components/Modal";

function App() {
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  return (
    <ProviderPicker>
      <Header />
      <Board />
      <footer>
        <Button outline onClick={handleOpenModal} text="RULES"></Button>
      </footer>
      {isOpen && <Modal handleCloseModal={handleCloseModal} />}
    </ProviderPicker>
  );
}

export default App;
