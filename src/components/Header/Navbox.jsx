import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbox.module.css";
function Navbox() {
  return (
    <div className={styles["navbar-box"]}>
      <Link to="#" className="link">
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        Add to Wishlist
      </Link>
      <FontAwesomeIcon
        icon={faShoppingBasket}
        className="link"
      ></FontAwesomeIcon>
    </div>
  );
}

export default Navbox;
