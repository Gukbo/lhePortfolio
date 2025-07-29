// 이미지 크기 200 * 300

import styles from "./ProjectCard.module.css";
import todoProj from "../assets/todo_project.png";
import movieProj from "../assets/movie_project.png";
import pokeProj from "../assets/poke_project.png";
import portProj from "../assets/port_project.png";
import chatProj from "../assets/chat_project.png";

const ProjectCard = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div
          className={styles.cardContainer}
          onClick={() => window.open("https://github.com/Gukbo/verysimpleTodo")}
        >
          <div className={styles.cardbox}>
            <p>투두앱</p>
            {<img src={todoProj} alt="todos project" />}
          </div>
        </div>
        <div
          className={styles.cardContainer}
          onClick={() => window.open("https://github.com/Gukbo/movieapp")}
        >
          <div className={styles.cardbox}>
            <p>영화앱</p>
            {<img src={movieProj} alt="movie project" />}
          </div>
        </div>
        <div
          className={styles.cardContainer}
          onClick={() => window.open("https://github.com/Gukbo/pokedex")}
        >
          <div className={styles.cardbox}>
            <p>pokeDex</p>
            {<img src={pokeProj} alt="pokemon project" />}
          </div>
        </div>
        <div
          className={styles.cardContainer}
          onClick={() => window.open("https://github.com/Gukbo/portfolio")}
        >
          <div className={styles.cardbox}>
            <p>포트폴리오</p>
            {<img src={portProj} alt="portfolio project" />}
          </div>
        </div>
        <div
          className={styles.cardContainer}
          onClick={() =>
            window.open("https://github.com/shshjhjh4455/character_chatbot_web")
          }
        >
          <div className={styles.cardbox}>
            <p>가상 캐릭터 챗봇</p>
            {<img src={chatProj} alt="chatbot project" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
