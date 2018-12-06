import React, { Component } from "react";
import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    return (
      <div className="skill-card-section d-flex flex-column align-items-center">
        <img
          src={require("../../assets/design_icon.png")}
          alt="design_icon"
          height="120px"
          width="120px"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
          soluta iure, saepe perferendis enim quidem veritatis
        </p>
        <button className="ui button ">LEARN MORE</button>
      </div>
    );
  }
}
export default SkillCard;
