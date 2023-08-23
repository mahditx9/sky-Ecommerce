import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../layout/Container";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  faLocation,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryFooter from "./PrimaryFooter";
function Footer() {
  return (
    <footer>
      <Container className={styles.footer}>
        <PrimaryFooter />
        <div className={styles.col}>
          <h2>Support</h2>
          <ul>
            <li>
              <Link className={styles["f-link"]}>Track Your Order</Link>
            </li>
            <li>
              <Link className={styles["f-link"]}>terms & conditions</Link>
            </li>
            <li>
              <Link className={styles["f-link"]}>privacy policy</Link>
            </li>
            <li>
              <Link className={styles["f-link"]}>help centre</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2>Useful Links</h2>
          <ul>
            <li>
              <Link className={styles["f-link"]}>Home</Link>
            </li>
            <li>
              <Link className={styles["f-link"]}>Shop</Link>
            </li>
            <li>
              <Link className={styles["f-link"]}>About</Link>
            </li>
            <li>
              <Link className={styles["f-link"]}>News & Articles</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2>Useful Links</h2>
          <ul className={styles.useful}>
            <li>
              <FontAwesomeIcon icon={faLocation} className={styles['useful-icon']} ></FontAwesomeIcon>
              <Link className={styles["f-link"]}>Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faMessage} className={styles['useful-icon']} ></FontAwesomeIcon>
              <Link className={styles["f-link"]}>Shop</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className={styles['useful-icon']} ></FontAwesomeIcon>
              <Link className={styles["f-link"]}>About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
