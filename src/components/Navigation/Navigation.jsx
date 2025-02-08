import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

function Navigation() {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
