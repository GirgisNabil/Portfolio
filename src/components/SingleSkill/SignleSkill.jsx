import React from "react";
import "./SignleSkill.css";
export default function SignleSkill(props) {
  var Icon = props.icon;

  return (
    <div className="skill-container">
      <div className="skillaya">
        <Icon />
      </div>
      <p>{props.name}</p>
    </div>
  );
}
