import React from "react";
import "../index.css";
import "./Navbar.css";

const NavBarRemake = () => (
  <>
    <span className="nav-menu">
      <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Crit-Hit WebDev</label>
        <ul>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/aboutme">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </span>
  </>
);

export default NavBarRemake;
