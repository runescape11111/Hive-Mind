import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ to, exact = false, children }) {
  return (
    <li>
      <NavLink exact={exact} to={to} activeClassName={styles.active}>
        {children}
      </NavLink>
    </li>
  );
}
export default Nav;
