import React from "react";
import "./index.css";

function Home() {
  return (
    <div id="home">
      <div className="home_about">
        <center>
          <h3>ABOUT THIS SITE</h3>
          <p id="p1">
            A BEAUTIFUL, RESPONSIVE, STATICALLY-GENEREATED, REACT APPLICATION
            WRITTEN WITH MODERN JAVASCRIPT
          </p>
        </center>
      </div>
      <div className="home_about">
        <p>
          Welcome to my website. Please feel free to read more about me, or you
          can chech out my resume, projects, view statics, or contact me.
        </p>
        <p>Source available here.</p>
      </div>
      <div className="home_about">
        <center>
          <h5>(Some sections are under construction!)</h5>
        </center>
      </div>
    </div>
  );
}

export default Home;
