import { useState, useEffect } from "react";
import "./index.css";
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiMailLine,
  RiGithubFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

function Profile() {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date("1996-10-10T09:24:00");
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="div_profile">
      <img
        src="https://docs.kariyer.net/candidate/000/018/305/avatar/1830517220191021062700200.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUtyoieM5GYECYBAyBb5i6IACbCPP9AHSdXhiTOspVdmcJf1m%2BEnf4j%2FJpIaLZiySGgdkH6JbfzHQ!e!"
        alt="profil fotosu"
      />
      <h1>YASİN ALTUNIŞIK</h1>
      <a href="mailto:altun.yasin.isik@gmail.com" id="mail">
        altun.yasin.isik@gmail.com
      </a>
      <br />
      <br />
      <hr />
      <br />
      <h4>ABOUT</h4>
      <p className="profile_p">
        Hi, I'm Yasin. I am a front-end developer and a javascript addict who
        like React/React Native.{" "}
      </p>
      <text className="grey">Age:{age}</text>
      <br />
      <br />
      <Link to="/resume">
        <button className="click">
          <text className="btn_txt">LEARN MORE</text>
        </button>
      </Link>
      <br />
      <br />
      <br />
      <hr />
      <br />
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
        <a href="mailto:altun.yasin.isik@gmail.com" className="profile_a">
          <RiMailLine />
        </a>
      </h3>
      <div className="websiteUrl">
        <span>
          <a
            href="https://www.yasinaltunisik.com/"
            className="profile_a websiteUrl"
          >
            YASINALTUNISIK.COM
          </a>
        </span>
      </div>
    </div>
  );
}

export default Profile;
