import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-title">
          <span>GET TO KNOW</span>
          <h1>About <b>Me</b></h1>
          <p>
            A little more about me, my skills and my passion
            for creating modern websites.
          </p>
        </div>

        <div className="about-content">

          <div className="about-text">

            <h2>
              I'm a <span>Full Stack Developer</span>
            </h2>

            <p>
              I am a passionate and creative Frontend Developer
              specializing in React JS, My-SQL, C & C++ , MongoDB, Github , JavaScript, HTML and CSS.
              I enjoy creating modern, colorful and responsive
              websites with beautiful user interfaces.
            </p>

            <p>
              My goal is to build websites that are not only
              visually attractive but also easy to use, fast
              and responsive on every device.
            </p>

            <button className="about-btn">
              Read More →
            </button>

          </div>

          <div className="about-cards">

            <div className="about-card">
              <span>01</span>
              <h2>10+</h2>
              <p>Projects Completed</p>
            </div>

            <div className="about-card">
              <span>02</span>
              <h2>5+</h2>
              <p>Technologies</p>
            </div>

            <div className="about-card">
              <span>03</span>
              <h2>100%</h2>
              <p>Responsive Design</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;