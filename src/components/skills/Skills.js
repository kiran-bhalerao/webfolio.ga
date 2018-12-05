import React, { Component } from "react";
import "./Skills.css";
import Heading from "../heading/Heading";
import SkillCard from "../skill-card/SkillCard";

const subtitle =`Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor, 
Possimus repudiandae, maiores quam fugit`;
class Skills extends Component {
  render() {
    return (
      <Heading title="SKILLS" subtitle={subtitle}  id="skills-section">
      <section className="card-container">
      <SkillCard />
      <SkillCard />
      <SkillCard />
      </section>
      </Heading>
    );
  }
}
export default Skills;
