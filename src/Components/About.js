import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <div className="ab_10">
      <div className="about-container">
        <h1>About Me</h1>
        <section className="about-section">
          <h2>Introduction</h2>
          <p>
            Hello! I am Subarna Dahal, a passionate web developer with experience in building dynamic and responsive web applications. My primary focus is on creating seamless user experiences and efficient code.
          </p>
        </section>
        <section className="about-section">
          <h2>Skills</h2>
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
        </section>
        <section className="about-section">
          <h2>Education & Experience</h2>
          <p>
            I am studing in final year in Bachelor in Information Engineering and have worked on various projects ranging from small websites to large-scale applications. I am always eager to learn new technologies and take on new challenges.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
