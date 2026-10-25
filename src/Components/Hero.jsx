import React from "react";
import "../CSS/Hero.css";
import profile from "../Assets/Drashti.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="circle one"></div>
      <div className="circle two"></div>
      <div className="circle three"></div>

      <div className="hero-container">

        <div className="hero-content">

          <h3>👋 Hello, I'm</h3>

          <h1>
            Drashti <span>Sharma</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p>
            Passionate about creating beautiful, modern and
            responsive web applications using React JS,
            JavaScript, HTML and CSS.
          </p>

          <div className="btn-group">
            <button className="hire-btn">
              Hire Me
            </button>

            <button className="resume-btn">
              Download Resume
            </button>
          </div>

          <div className="social-text">
            <span>Creative</span>
            <span>•</span>
            <span>Frontend</span>
            <span>•</span>
            <span>Developer</span>
          </div>

        </div>

        <div className="hero-image">

          <div className="image-circle">
            <img src={profile} alt="Drashti Sharma" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;


