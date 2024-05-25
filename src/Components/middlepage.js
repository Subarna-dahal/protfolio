import React from "react";
import cover from "../Assets/profile.png";
import "./css/Circle.css";
import facebooksvg from "../Assets/icons8-facebook.svg";
import gitscg from "../Assets/icons8-github.svg";
import Twitsvg from "../Assets/icons8-twitterx.svg";
import Linkedsvg from "../Assets/icons8-linkedin-logo.svg";

const Midl = () => {
  return (
    <div className="_ml_20">
      <div className="_ml_10">
        <h1>Hello Developer</h1>
        <h3>I am Subarna Dahal</h3>
        <p>Hello, I am a web developer</p>
        <div className="profile-container">
          <img src={cover} alt="pic" />
          <div className="_skills">
          <h2>Programming Skills</h2>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Solidity</li>
              <li>Rust</li>
            </ul>
          </div>
        </div>
        <div className="social-links">
            <a href="https://www.facebook.com/subarna.dahal.1892">
              <img src={facebooksvg} alt="Facebook" />
            </a>
            <a href="https://github.com/Subarna-dahal?tab=repositories">
              <img src={gitscg} alt="Github" />
            </a>
            <a href="https://twitter.com/SubarnaDahal189">
              <img src={Twitsvg} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/subarna-dahal-6098412a6">
              <img src={Linkedsvg} alt="LinkedIn" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Midl;
