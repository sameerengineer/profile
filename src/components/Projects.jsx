import React from "react";
import "./Projects.css";

const projects = [
  { id: 1, title: "Portfolio Website", tech: "React, CSS", link: "#" },
  { id: 2, title: "E-commerce UI", tech: "React, Redux, Bootstrap", link: "#" },
  
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>Tech Stack: {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;