import styles from "./Skills.module.css";
import htmlIcon from "../assets/html_icon.png";
import cssIcon from "../assets/css_icon.png";
import jsIcon from "../assets/js_icon.png";
import reactIcon from "../assets/react_icon.png";
import githubIcon from "../assets/github_icon.png";
import nextjsIcon from "../assets/nextjs_icon.png";
import tsxIcon from "../assets/tsx_icon.png";
import styledCompoIcon from "../assets/styledCompo_Icon.png";
import firebaseIcon from "../assets/firebase_icon.png";

const Skills = () => {
  return (
    <>
      <div className={styles.skillsWrapper}>
        <h2 id="skills">Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.subWrapper}>
            <div className={styles.skillContainer}>
              <img src={htmlIcon} alt="html icon" />
            </div>
            <div className={styles.skillContainer}>
              <img src={cssIcon} alt="css icon" />
            </div>
            <div className={styles.skillContainer}>
              <img src={jsIcon} alt="js icon" />
            </div>
            <div className={styles.skillContainer}>
              <img src={tsxIcon} alt="tsx icon" />
            </div>
            <div className={styles.skillContainer}>
              <img src={styledCompoIcon} alt="styledCompo icon" />
            </div>
            <div className={styles.skillContainer}>
              <img src={reactIcon} alt="react icon" />
            </div>
            <div className={styles.skillContainer}>
              <img src={nextjsIcon} alt="nextjs icon" />
            </div>
            <div className={styles.skillContainer}>
              <img src={githubIcon} alt="github icon" />
            </div>
            <div className={styles.skillContainer}>
              <img src={firebaseIcon} alt="firebase icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
