import ProfileImg from "../assets/ProfileImg.png";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img
          className={styles.ProfileImg}
          src={ProfileImg}
          alt="profile"
          width="240px"
        />
      </div>
      <div className={styles.profileContainer}>
        <p>
          안녕하세요 <br />
          배움과 도전을 즐기는 <b>이한음</b> 입니다.
        </p>
        <p> #front-end #web-developer</p>
      </div>
    </>
  );
};

export default Homepage;
