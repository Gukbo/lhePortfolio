import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.sideWrapper}>
        <div className={styles.sideContainer}>
          <ul>
            <a onClick={() => navigate("/")}>HOME</a>
          </ul>
          <ul>
            <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              About
            </a>
          </ul>
          <ul>
            <a href="#Exp">Experiences</a>
          </ul>
          <ul>
            <a href="#Skills">Skills</a>
          </ul>
          <ul>
            <a href="#Projects">Projects</a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
