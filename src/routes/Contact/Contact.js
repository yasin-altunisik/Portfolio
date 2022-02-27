import React from "react";
import "./Contact.css"
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiMailLine,
  RiGithubFill,
  RiCopyrightLine,
} from "react-icons/ri";

function Contact() {
  return (
    <div className="grey" id="contact">
      <h1 className="black">CONTACT</h1>
      <br />
      <hr />
      <br />
      <p>Feel free to get in touch. You can email me at:</p>
      <address>
        <a href="mailto:webmaster@example.com" id="a_contact1">altun.yasin.isik@gmail.com</a>.
      </address>

      <h3>
        <a href="https://github.com/yasin-altunisik" className="profile_a">
          <RiGithubFill />
        </a>
        <a
          href="https://www.linkedin.com/in/yasinaltunisik/"
          className="profile_a"
        >
          <RiLinkedinFill />
        </a>
        <a href="https://twitter.com/painKiller_YSN" className="profile_a">
          <RiTwitterFill />
        </a>
      </h3>

    </div>
  );
}

export default Contact;
