import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, title, desc, langs, link = [] }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>사용 언어</p>
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
          {langs.map((icon, idx) => (
            <img key={idx} src={icon} alt="" width={32} height={32} />
          ))}
        </div>
        <p>
          {desc.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p>
          <a href={link} target="_blank">
            깃허브 링크
          </a>
        </p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
