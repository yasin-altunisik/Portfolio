import React from 'react'
import "./About.css"

function About() {
  return (
    <div className="grey" id="about">
      <h2 className="black">ABOUT ME</h2>
      <br/>
      <hr/>
      <br/>
      <h3 className="black">INTRO</h3>
      <p>I am a software developer graduated as an electirical electronics engineer. Although i have professional experience about embedded software engineering, my passion is web development. As a javascript addict, i improved myself about React and React Native. This website is also developed with React.js.</p>
      <br/>
      <h3 className="black">I LIKE</h3>
      <ul>
        <li>running</li>
        <li>travelling</li>
        <li>video game</li>
        <li>sometimes cooking</li>
        <li>most of the time eating</li>
      </ul>
    </div>
  )
}

export default About