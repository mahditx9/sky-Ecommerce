import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./TopBar.module.css";
function Topbar() {
  return (
    <div className={`${styles["top-bar"]} content`}>
      <h1 className={styles.logo}>
        <img src="../../assets/react.svg" alt="logo" />
      </h1>
      <div className={styles["top-bar-box"]}>
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Support
        </Link>
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <i className="fa fa-user"></i>Accounts
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
