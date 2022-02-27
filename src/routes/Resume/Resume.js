import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="grey" id="resume">
      <h2 className="black">RESUME</h2>
      <br />

      <hr />
      <br />

      <h3 className="black">EXPERIENCE</h3>
      <p>
        <i>Gelecek Varlık FullStack Bootcamp</i>
        <br />
        02.2022(completed)
        <br />
        An intensive 2 months long coding bootcamp in which I improved myself to
        design and build web applications with React.js.
      </p>
      <br />
      <p>
        <i>Redsan Electronics</i> - Embedded Software Engineer
        <br />
        07.2021 - Now
        <br />
        Debugging the software of ups devices developed with C language on pic
        series microprocessors. Some tasks of this software are charging batteries, measuring temperature, running fan and rectifying ac to dc.
      </p>
      <br />
      <p>
        <i>İstanbul Elektronik Anahtar</i> - Embedded Software Engineer
        <br />
        06.2020 - 06.2021
        <br />I took part on the software used for generating new key to
        vehicles. My responsibilities were adding new car models to software,
        debugging, solving customer problems, sharing updates, improving
        software efficiency, adding new features. I developed the software with
        C language on stm32 series microprocessors.
      </p>
      <br />
      <br />

      <h3 className="black">SKILLS</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>REACT NATIVE</li>
        <li>REDUX</li>
        <li>UX/UI</li>
      </ul>
      <br />
      <br />

      <h3 className="black">EDUCATION</h3>
      <p>
        B.S. Electrical Electronics Engineering <br /> Yeni Yüzyıl Universty
      </p>
      <br />
      <br />
      
    </div>
  );
}

export default Resume;
