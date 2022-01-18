import styles from "./styles.module.css"

function Modal({handleCloseModal}) {
  return (
    <div className={styles.containerModal} onClick={handleCloseModal}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <h2>RULES</h2>
          <button onClick={handleCloseModal}>
            <img src="./images/icon-close.svg"/>
          </button>
        </header>
        <div className={styles.modalBody}>
          <img src="./images/image-rules.svg"/>
        </div>
      </div>
    </div>
  )
}

export default Modal
