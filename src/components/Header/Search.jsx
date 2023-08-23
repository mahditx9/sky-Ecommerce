import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";
function Search() {
  return (
    <div className={styles["search-box"]}>
      <input id={styles["search-input"]} />
      <FontAwesomeIcon
        icon={faSearch}
        className={styles["search-icon"]}
      ></FontAwesomeIcon>
    </div>
  );
}

export default Search;
