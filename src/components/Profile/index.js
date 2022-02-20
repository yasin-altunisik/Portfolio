import React from "react";
import "./index.css";
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiMailLine,
  RiGithubFill,
  RiCopyrightLine,
} from "react-icons/ri";

function Profile() {
  return (
    <div className="div_profile">
      <img
        src="https://docs.kariyer.net/candidate/000/018/305/avatar/1830517220191021062700200.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUtyoieM5GYECYBAyBb5i6IACbCPP9AHSdXhiTOspVdmcJf1m%2BEnf4j%2FJpIaLZiySGgdkH6JbfzHQ!e!"
        alt="profil fotosu"
      />
      <h1>YASİN ALTUNIŞIK</h1>
      <a href="mailto:altun.yasin.isik@gmail.com" className="profile_a">altun.yasin.isik@gmail.com</a>
      <div>
        <br />
      </div>
      <hr />
      <div>
        <br />
      </div>
      <h4>ABOUT</h4>
      <p className="profile_p">
        Hi, I'm Yasin. I am a front-end developer and a javascript addict who
        like React/React Native.{" "}
      </p>
      <div>
        <br />
      </div>
      <button>
        <text className="btn_txt">LEARN MORE</text>
      </button>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <hr />
      <div>
        <br />
      </div>
      <h3>
        <a href="https://github.com/yasin-altunisik" className="profile_a">
          <RiGithubFill />
        </a>
        <a href="https://www.linkedin.com/in/yasinaltunisik/" className="profile_a">
          <RiLinkedinFill />
        </a>
        <a href="https://twitter.com/painKiller_YSN" className="profile_a">
          <RiTwitterFill />
        </a>
        <a href="mailto:altun.yasin.isik@gmail.com" className="profile_a">
          <RiMailLine />
        </a>
      </h3>

      <div className="websiteUrl">
        <RiCopyrightLine />
        <text> YASİN ALTUNIŞIK</text>
        <span>
          <a href="yasinaltunisik.com" className="profile_a websiteUrl">
            YASINALTUNISIK.COM
          </a>
        </span>
      </div>
    </div>
  );
}

export default Profile;
