import React from "react";
import "./css/Service.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="service-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>
            I create responsive and dynamic websites using modern technologies like React, Node.js, and Express. My focus is on creating seamless user experiences.
          </p>
        </div>
        <div className="service-item">
          <h2>Backend Development</h2>
          <p>
            I specialize in building robust backend systems with Node.js, Express, and databases like MongoDB and MySQL to ensure your applications run smoothly.
          </p>
        </div>
        <div className="service-item">
          <h2>Blockchain Development</h2>
          <p>
            I have experience in developing smart contracts and decentralized applications (DApps) using Solidity and Rust, providing secure and scalable blockchain solutions.
          </p>
        </div>
        <div className="service-item">
          <h2>Consulting</h2>
          <p>
            I offer consulting services to help you design and implement effective web solutions, optimize performance, and leverage the latest technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
