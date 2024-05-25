import React from "react";
import './css/navbar.css';

const NavBar = () => {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Service</a></li>
          <li className="pinkycolor"><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
