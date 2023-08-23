import styles from "./Navbar.module.css";
import Menu from "./Menu";
import Search from "./Search";
import Navbox from "./Navbox";
import { useEffect, useState } from "react";
function Navbar() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = (e) => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`${styles.navbar} content ${scroll ? "scrolled" : ""}`}>
      <Menu scroll={scroll} />
      <Search />
      <Navbox />
    </div>
  );
}

export default Navbar;
