import Container from "../../layout/Container";
import Topbar from "./Topbar";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
function Header() {
  return (
    <header>
      <Container className={styles["header-container"]}>
        <Topbar />
        <Navbar />
      </Container>
    </header>
  );
}

export default Header;
