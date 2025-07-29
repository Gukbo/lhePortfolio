import styles from "./Footer.module.css";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";

const Foot = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.spanContainer}>
          <p>©2025 Hans_gall. All Rights Reserved.</p>
        </div>
        <div className={styles.logoContainer}>
          <IoLogoGithub
            className={styles.githubLogo}
            onClick={() => window.open("https://github.com/Gukbo")}
          />
          <SiVelog
            className={styles.velogLogo}
            onClick={() => window.open("https://velog.io/@mebung2/posts")}
          />
        </div>
      </div>
    </>
  );
};

export default Foot;
