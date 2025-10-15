import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import projectData from "../data/project.json";
import "../CssFiles/Project.css";

function Projects() {
  
  

  return (
    <section id="projects">
    <div className="projects-container">
      <h2 className="projects-title">🚀 My Projects</h2>

      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={proj.imageSrc}
              alt={proj.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>
                {proj.description.length < 200
                  ? proj.description
                  : proj.description.slice(0, 200) + "..."}
              </p>
            </div>

            <div className="project-buttons">
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
              >
                🌐 Live Demo
              </a>
              <a
                href={proj.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-source"
              >
                💻 Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Projects;
