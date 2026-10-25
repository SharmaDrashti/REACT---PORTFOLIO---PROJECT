import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">

          <div className="footer-title">
            <span>06 / LET'S CONNECT</span>
            <h1>
              Let's create
              <strong> something amazing.</strong>
            </h1>

            <p>
              Have an idea, project or opportunity?
              Let's turn your ideas into a beautiful digital experience.
            </p>

            <a href="#contact" className="footer-btn">
              Start a Project →
            </a>
          </div>

        </div>

        {/* Middle Section */}
        <div className="footer-middle">

          <div className="footer-brand">
            <h2>
              &lt; <span>Drashti Sharma</span> /&gt;
            </h2>

            <p>
              Frontend Developer creating modern,
              responsive and creative web experiences.
            </p>
          </div>

          <div className="footer-links">
            <h3>Navigation</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            {/* <a href="#projects">Projects</a> */}
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h3>Follow Me</h3>

            <a href="#https://www.linkedin.com/in/drashti-sharma-495071328/?isSelfProfile=true">LinkedIn ↗</a>
            <a href="#https://github.com/SharmaDrashti">GitHub ↗</a>
            <a href="#cohttps://www.instagram.com/drashti__sharma__11?stkn=MWJydzM2ZDRlNmt0OQ==ntact">Instagram ↗</a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">

          <p>© 2026 Drashti Sharma. All Rights Reserved.</p>

          <p>
            Designed & Built with <span>♥</span> & React
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;