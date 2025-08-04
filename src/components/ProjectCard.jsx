// 이미지 크기 200 * 300
import { useState } from "react";
import styles from "./ProjectCard.module.css";
import Modal from "./Modal";

const projectList = [
  { title: "투두앱", desc: "설명" },
  { title: "영화앱", desc: "설명" },
  { title: "pokeDex", desc: "설명" },
  { title: "포트폴리오", desc: "설명" },
  { title: "가상 캐릭터 챗봇", desc: "설명" },
  { title: "X 클론 코딩", desc: "설명" },
];

const ProjectCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleCardClick = (index) => {
    setSelectedIdx(index);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedIdx(null);
  };

  return (
    <>
      <div className={styles.cardWrapper}>
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className={styles.cardContainer}
            onClick={() => handleCardClick(idx)}
          >
            <div className={styles.cardBox}>
              <p>{project.title}</p>
              {<Modal />}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;

// import todoProj from "../assets/todo_project.png";
// import movieProj from "../assets/movie_project.png";
// import pokeProj from "../assets/poke_project.png";
// import portProj from "../assets/port_project.png";
// import chatProj from "../assets/chat_project.png";
// import xProj from "../assets/x_project.png";

{
  /* <div className={styles.cardContainer}>
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
        </div> */
}
