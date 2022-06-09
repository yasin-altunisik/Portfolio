import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (

<div>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://www.yasinaltunisik.com/">YASİN ALTUNIŞIK</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/about" class="nav-link">ABOUT</Link>
          </li>
          <li class="nav-item">
            <Link to="/resume" class="nav-link">RESUME</Link>
          </li>
          <li class="nav-item">
          <Link to="/projects" class="nav-link">PROJECTS</Link>
          </li>
          <li class="nav-item">
          <Link to="/contact" class="nav-link">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    /*
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
    */
    
  );
}

export default Navbar;
