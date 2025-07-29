import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Homepage from "../components/Homepage";
import Nav from "../components/Nav";
import Foot from "../components/Foot";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrapper}>
        <Nav />
        <div className={styles.homeWrapper}>
          <div className={styles.homeContainer}>
            <Homepage />
          </div>
          <div className={styles.btnContainer}>
            <button
              onClick={() => navigate("/info")}
              className={styles.enterBtn}
            >
              Read more
            </button>
          </div>
          <Foot />
        </div>
      </div>
    </>
  );
};

export default Home;
