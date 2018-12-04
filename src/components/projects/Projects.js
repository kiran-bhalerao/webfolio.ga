import React from "react";
import "./Projects.css";
import ProjectCard from "../project-card/ProjectCard";
import { Query } from "react-apollo";
import { GET_DATA } from "./ProjectsQuery";
import ProjectHeading from "./ProjectHeading";

/**
 project card container->
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-evenly
 **/

const btnColors = [
  "#F8CCCD",
  "#FDF3D4",
  "#C8FFBF",
  "#F8CCEA",
  "#D2EEE1",
  "#C3F5FE"
];

const fontColors = [
  "#B52E31",
  "#FF8800",
  "#16A200",
  "#EE03A0",
  "#00AA5B",
  "#00B8D9"
];

const Projects = () => (
  <Query query={GET_DATA}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error}`;
      console.log(data.repositoryOwner.pinnedRepositories.nodes);
      return (
        <ProjectHeading>
          <section className="card-container">
            {data.repositoryOwner.pinnedRepositories.nodes.map((node, i) => (
              <ProjectCard
                node={node}
                btnColor={btnColors[i]}
                fontColor={fontColors[i]}
              />
            ))}
          </section>
        </ProjectHeading>
      );
    }}
  </Query>
);
export default Projects;
