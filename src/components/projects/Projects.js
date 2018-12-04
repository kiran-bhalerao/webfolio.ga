import React, { Component } from "react";
import "./Projects.css"
import ProjectCard from "../project-card/ProjectCard";

class Projects extends Component {
  render() {
    return (
      <section id="projects" className="d-flex flex-column align-items-center">
        <h1 className="projects-tag">PROJECTS</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quos
          rem cumque illo ullam ratione odit minima vero sequi ipsum. Voluptatum
          reiciendis dolor ab illum fugit aut eligendi rerum quidem!
        </p>
        <ProjectCard />
      </section>
    );
  }
}
export default Projects;
