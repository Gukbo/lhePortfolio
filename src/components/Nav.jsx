import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.NavContainer}>
        <button onClick={() => navigate("/")} className={styles.Homebtn}>
          LHE PORTFOLIO
        </button>
      </div>
    </>
  );
};

export default Nav;
