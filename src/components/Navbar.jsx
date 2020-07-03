import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../images/logo.png";

const NavBar = () => (
  <>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="navbar-items">
          <NavLink
            to="/"
            activeStyle={{ fontWeight: "bold", color: "black" }}
            className="navlink-changed"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-items">
          <NavLink
            to="/aboutme"
            activeStyle={{ fontWeight: "bold", color: "black" }}
            className="navlink-changed"
            exact
          >
            About Me
          </NavLink>
        </li>
        <li className="navbar-items">
          <img
            src={logo}
            alt="crit-hit-logo"
            height="40px"
            width="120px"
            className="navbar-logo"
          ></img>
        </li>
        <li className="navbar-items">
          <NavLink
            to="/projects"
            activeStyle={{ fontWeight: "bold", color: "black" }}
            className="navlink-changed"
            exact
          >
            Projects
          </NavLink>
        </li>
        <li className="navbar-items">
          <NavLink
            to="/contact"
            activeStyle={{ fontWeight: "bold", color: "black" }}
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
