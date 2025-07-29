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
            <a
              onClick={() => {
                const aboutSection = document.getElementById("About");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              About
            </a>
          </ul>
          <ul>
            <a
              onClick={() => {
                const ExpSection = document.getElementById("Exp");
                if (ExpSection) {
                  ExpSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Experience
            </a>
          </ul>
          <ul>
            <a
              onClick={() => {
                const skillsSection = document.getElementById("skills");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              skills
            </a>
          </ul>
          <ul>
            <a
              onClick={() => {
                const projectSection = document.getElementById("Projects");
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Projects
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
