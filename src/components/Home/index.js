import React from "react";
import "./index.css";

function Home() {
  return (
    <div id="home">
      <div className="home_about">
        <h2>ABOUT THIS SITE</h2>
        <p className="grey">
          A BEAUTIFUL, RESPONSIVE, STATICALLY-GENEREATED, REACT APPLICATION
          WRITTEN WITH MODERN JAVASCRIPT
        </p>
      </div>
      <div className="home_about">
        <p className="grey">
          Welcome to my website. Please feel free to read more about me, or you
          can chech out my resume, projects, view statics, or contact me.
        </p>
        <p className="grey">Source available here.</p>
      </div>
      <div className="home_about">
        <p className="grey">(Some sections are under construction!)</p>
      </div>
    </div>
  );
}

export default Home;
