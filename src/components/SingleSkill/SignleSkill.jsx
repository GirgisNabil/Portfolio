import React from "react";
import "./SignleSkill.css";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
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
