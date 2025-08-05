// 이미지 크기 200 * 300
import { useState } from "react";
import styles from "./ProjectCard.module.css";
import Modal from "./Modal";
import todoIcon from "../assets/todo_imo.png";
import movieIcon from "../assets/movie_imo.png";
import pokeIcon from "../assets/poke_imo.png";
import portIcon from "../assets/port_imo.png";
import chatIcon from "../assets/chat_imo.png";
import xIcon from "../assets/x_imo.png";
import htmlIcon from "../assets/html_icon.png";
import cssIcon from "../assets/css_icon.png";
import jsIcon from "../assets/js_icon.png";
import reactIcon from "../assets/react_icon.png";
import githubIcon from "../assets/github_icon.png";
import nextjsIcon from "../assets/nextjs_icon.png";
import tsxIcon from "../assets/tsx_icon.png";
import styledCompoIcon from "../assets/styledCompo_Icon.png";
import firebaseIcon from "../assets/firebase_icon.png";

const projectList = [
  {
    title: "투두앱",
    desc: "기본적인 html css js로 구현된 간단한 투두리스트 앱입니다 \n 일정 등록 삭제와 같은 기본적인 기능을 구현했습니다.",
    icon: todoIcon,
    langs: [htmlIcon, cssIcon, jsIcon],
    link: "https://github.com/Gukbo/verysimpleTodo",
  },
  {
    title: "영화앱",
    desc: "useEffect와 useState를 활용하여 영화 정보를 가져오는 앱입니다. \n 영화 검색, 상세 정보 조회 등의 기능을 구현했습니다.",
    icon: movieIcon,
    langs: [reactIcon, jsIcon],
    link: "https://github.com/Gukbo/movieapp",
  },
  {
    title: "pokeDex",
    desc: "pokeapi를 통해 포켓몬스터 도감을 구현했습니다. \n 포켓몬 상세 정보 조회 기능을 포함하고 있습니다.",
    icon: pokeIcon,
    langs: [reactIcon, cssIcon, jsIcon, githubIcon],
    link: "https://github.com/Gukbo/pokedex",
  },
  {
    title: "포트폴리오",
    desc: "개인 포트폴리오 웹 사이트입니다 \n React와 CSS를 사용하여 제작하였으며, 프로젝트 소개와 기술 스택을 포함하고 있습니다.",
    icon: portIcon,
    langs: [reactIcon, cssIcon, jsIcon, githubIcon],
    link: "https://github.com/Gukbo/lhePortfolio",
  },
  {
    title: "가상 캐릭터 챗봇",
    desc: "가상 캐릭터와 대화할 수 있는 챗봇 웹 애플리케이션입니다. \n Next.js와 TypeScript를 사용하여 개발하였으며, 다양한 캐릭터와의 대화 기능을 제공합니다. \n 대학교 캡스톤 디자인 프로젝트로 제작되었습니다.",
    icon: chatIcon,
    langs: [nextjsIcon, cssIcon, jsIcon, tsxIcon, githubIcon],
    link: "https://github.com/shshjhjh4455/character_chatbot_web",
  },
  {
    title: "X 클론 코딩",
    desc: "노마드 코더 의 X 클론 코딩 강의를 통해 제작한 웹 애플리케이션입니다. \n React와 Firebase를 사용하여 로그인 기능과 실시간 채팅 기능을 구현하였습니다.",
    icon: xIcon,
    langs: [reactIcon, tsxIcon, firebaseIcon, styledCompoIcon, githubIcon],
    link: "https://github.com/Gukbo/Nwitter-Reloaded",
  },
];

const ProjectCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedIdx(null);
  };

  const handleCardClick = (index) => {
    setSelectedIdx(index);
    setIsModalOpen(true);
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
              <img
                src={project.icon}
                alt={project.title}
                width={100}
                height={100}
              />
            </div>
          </div>
        ))}
        {isModalOpen && selectedIdx !== null && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleClose}
            title={projectList[selectedIdx].title}
            desc={projectList[selectedIdx].desc}
            langs={projectList[selectedIdx].langs}
            link={projectList[selectedIdx].link}
          />
        )}
      </div>
    </>
  );
};

export default ProjectCard;
