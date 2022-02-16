import React from "react";
import "./index.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_name_div">
        <text className="navbar_name">YASİN ALTUNIŞIK</text>
      </div>

      <div className="links">
        <a href="https://github.com/yasin-altunisik">ABOUT</a>
        <text className="text1"> | </text>
        <a href="https://www.linkedin.com/in/yasinaltunisik/">RESUME</a>
        <text className="text1"> | </text>
        <a href="https://www.linkedin.com/in/yasinaltunisik/">PROJECTS</a>
        <text className="text1"> | </text>
        <a href="https://www.linkedin.com/in/yasinaltunisik/">STATS</a>
        <text className="text1"> | </text>
        <a href="https://www.linkedin.com/in/yasinaltunisik/">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;
