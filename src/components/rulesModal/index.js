import { createPortal } from "react-dom";
import styles from "./styles.module.css";

function Modal({ handleCloseModal }) {
  return(
  <div className={styles.containerModal} onClick={handleCloseModal}>
    <div className={styles.modal}>
      <header className={styles.modalHeader}>
        <h2>RULES</h2>
        <button onClick={handleCloseModal}>
          <img src="./images/icon-close.svg" alt="imagen" />
        </button>
      </header>
      <div className={styles.modalBody}>
        <img src="./images/image-rules.svg" alt="imagens" />
      </div>
    </div>
  </div>
  )
}

function RulesModal({handleCloseModal}) {
  return createPortal(<Modal handleCloseModal={handleCloseModal}/>, document.getElementById("portal")) ;
}

export default RulesModal;
