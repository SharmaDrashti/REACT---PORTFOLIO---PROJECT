
import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        <span>&lt;</span> Portfolio <b>/&gt;</b>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        {/* <a href="#projects">Projects</a> */}
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-btn">
        Let's Talk
      </a>

    </nav>
  );
};

export default Navbar;

