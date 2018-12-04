import React, { Component } from "react";
import "./ProjectCard.css";
class ProjectCard extends Component {
  render() {
    return (
      <div className="row card-section">
        <div className="d-flex flex-row">
          <img
            src={require("../../static/reactjs_icon.png")}
            alt="img"
            width="120px"
            height="120px"
            className="mb-0 mt-1"
          />
          <div className="d-flex flex-column ml-5 mt-4">
            <h2 className="mb-0">Title</h2>
            <p className="ml-auto mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur voluptatem eum ab sint deserunt natus numquam minus
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectCard;
