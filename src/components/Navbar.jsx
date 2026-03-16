import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { path: "/about", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.path} className="navbar-item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;