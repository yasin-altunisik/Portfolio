import React from "react";
import "./index.css";

function Home() {
  return (
    <div id="home">
        <h2 >ABOUT THIS SITE</h2>
        <br/>
        <p className="grey">
          A beautiful, responsive, statically-generated, react application written with modern javascript.
        </p>
        <br/>
        <hr/>
        <br/>
        <p className="grey">
          Welcome to my website. Please feel free to read more about me, or you
          can chech out my resume, projects, view statics, or contact me.
        </p>

        <p className="grey">Source available <a href="https://github.com/yasin-altunisik/portfolio" id="home_a1" target="_blank" rel="noopener noreferrer" className="grey">here</a>.</p>
        <br/>

    </div>
  );
}

export default Home;
