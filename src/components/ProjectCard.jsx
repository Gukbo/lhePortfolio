// 이미지 크기 200 * 300

import styles from "./ProjectCard.module.css";
import todoProj from "../assets/todo_project.png";
import movieProj from "../assets/movie_project.png";
import pokeProj from "../assets/poke_project.png";
import portProj from "../assets/port_project.png";
import chatProj from "../assets/chat_project.png";
import xProj from "../assets/x_project.png";

const ProjectCard = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>투두앱</p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>영화앱</p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>pokeDex</p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>포트폴리오</p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>가상 캐릭터 챗봇</p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>X 클론 코딩</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
