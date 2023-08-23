import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
function Menu({ scroll }) {
  return (
    <nav className={`${styles.menu} ${scroll ? "scrolled" : ""}`}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="#">Page</NavLink>
      <NavLink to="#">Shop</NavLink>
      <NavLink to="#">Hot Detail</NavLink>
      <NavLink to="#">About</NavLink>
      <NavLink to="#">Contact</NavLink>
    </nav>
  );
}

export default Menu;
