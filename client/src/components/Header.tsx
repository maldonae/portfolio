import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar_Header">
      {/* Bouton menu burger */}
      <button
        type="button"
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Menu avec gestion de l'ouverture */}
      <ul className={isOpen ? "nav_links open" : "nav_links"}>
        <li>
          <NavLink
            to="/profil/1"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiences"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Expériences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projets"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
