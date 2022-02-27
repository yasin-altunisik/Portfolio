import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <a href="https://www.yasinaltunisik.com/" className="navbar_name">YASİN ALTUNIŞIK</a>

      <nav className="links">
        <Link to="/about" className="navbar_a">
          ABOUT
        </Link>
        <text className="text1"> | </text>
        <Link to="/resume" className="navbar_a">
          RESUME
        </Link>
        <text className="text1"> | </text>
        <Link to="/projects" className="navbar_a">
          PROJECTS
        </Link>
        <text className="text1"> | </text>
        <Link to="/contact" className="navbar_a">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
