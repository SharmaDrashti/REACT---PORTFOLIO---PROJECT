
import React from "react";
import "../CSS/Skills.css";

import html from "../Assets/HTML.jfif";
import css from "../Assets/CSS.jfif";
import js from "../Assets/JAVASCRIPT.jfif";
import react from "../Assets/REACT.jfif";
import bootstrap from "../Assets/BOOTSTARP.jfif";
import git from "../Assets/GIT.jfif";

const Skills = () => {

  const skills = [
    {
      number: "01",
      name: "HTML",
      image: html,
      level: "95%",
      type: "Frontend"
    },
    {
      number: "02",
      name: "CSS",
      image: css,
      level: "90%",
      type: "Frontend"
    },
    {
      number: "03",
      name: "JavaScript",
      image: js,
      level: "85%",
      type: "Programming"
    },
    {
      number: "04",
      name: "React JS",
      image: react,
      level: "88%",
      type: "Framework"
    },
    {
      number: "05",
      name: "Bootstrap",
      image: bootstrap,
      level: "90%",
      type: "UI Framework"
    },
    {
      number: "06",
      name: "Git",
      image: git,
      level: "80%",
      type: "Version Control"
    }
  ];

  return (
    <section className="skills-page" id="skills">

      <div className="skills-background"></div>

      <div className="skills-content">

        {/* Heading */}

        <div className="skills-header">

          <div>
            <span className="skills-small-title">
              04 / EXPERTISE
            </span>

            <h1>
              Skills that bring
              <span> ideas to life.</span>
            </h1>
          </div>

          <p>
            A collection of technologies I use to build
            creative, responsive and modern web experiences.
          </p>

        </div>

        {/* Skills */}

        <div className="skills-list">

          {skills.map((skill, index) => (

            <div
              className={
                skill.name === "React JS"
                  ? "skill-row featured"
                  : "skill-row"
              }
              key={index}
            >

              <div className="skill-number">
                {skill.number}
              </div>

              <div className="skill-icon">
                <img
                  src={skill.image}
                  alt={skill.name}
                />
              </div>

              <div className="skill-name">
                <h2>{skill.name}</h2>
                <span>{skill.type}</span>
              </div>

              <div className="skill-progress">

                <div className="progress-top">
                  <span>Experience</span>
                  <strong>{skill.level}</strong>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: skill.level }}
                  ></div>
                </div>

              </div>

              <div className="skill-arrow">
                →
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;

