import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="projectCard">
      <div className="content">
        <div className="title">
          <h2>{props.title}</h2>

          <div className="link">
            {" "}
            <a href={props.refff} rel="noreferrer" target="_blank">
              <BsArrowUpRight />
            </a>
          </div>
        </div>
        <p className="sub-title">{props.subtitle}</p>

        <img src={props.img} alt="Imagsse" />
      </div>
    </div>
  );
}
