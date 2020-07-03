import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import "./Navbar.css";
import logo from "../images/Shower.png";

const NavBar = () => (
  <>
    <nav className="navbar">
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink
            to="/"
            activeStyle={{ fontWeight: "bold", color: "yellow" }}
            className="navlink-changed"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            to="/aboutme"
            activeStyle={{ fontWeight: "bold", color: "yellow" }}
            className="navlink-changed"
            exact
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-li nav-image">
          <img
            src={logo}
            alt="crit-hit-logo"
            height="50px"
            width="120px"
            className="navbar-logo"
          ></img>
        </li>
        <li className="nav-li">
          <NavLink
            to="/projects"
            activeStyle={{ fontWeight: "bold", color: "yellow" }}
            className="navlink-changed"
            exact
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            to="/contact"
            activeStyle={{ fontWeight: "bold", color: "yellow" }}
            className="navlink-changed"
            exact
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default NavBar;
