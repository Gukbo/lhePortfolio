import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal}>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
