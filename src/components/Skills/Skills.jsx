import React from "react";
import "./Skills.css";
import SignleSkill from "../SingleSkill/SignleSkill";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import {
  SiAdobephotoshop,
  SiWebgl,
  SiThreedotjs,
  SiNodedotjs,
  SiGithub,
  SiBlender,
} from "react-icons/si";

import { GrReactjs } from "react-icons/gr";

export default function Skills() {
  return (
    <div className="skills">
      <div className="container zigzag" id="skills">
        <div className="left">
          <div className="title">
            <h1>Skills & Experience</h1>
            <div className="paragraph">
              <div></div>
              <h2>
                bachelor's degree in software engineering
                <br />
                From Ahram Canadian University - ACU <br />
              </h2>
            </div>
          </div>
          {/********************************Skills****************************/}
          <div>
            <h3>Skills</h3>

            <div className="row">
              <SignleSkill icon={IoLogoHtml5} name="HTML" />
              <SignleSkill icon={IoLogoCss3} name="CSS" />
              <SignleSkill icon={BsBootstrapFill} name="Bootstrap" />
            </div>
            <div className="row">
              <SignleSkill icon={IoLogoJavascript} name="JS & ES6" />
              <SignleSkill icon={SiNodedotjs} name="Node.js" />
              <SignleSkill icon={GrReactjs} name="React.js" />
            </div>
            <div className="row">
              <SignleSkill icon={SiThreedotjs} name="THREE.js" />
              <SignleSkill icon={SiBlender} name="Blender" />
              <SignleSkill
                icon={SiAdobephotoshop}
                name="Photoshop"
                id="item9"
              />
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="main-title">Courses</h3>

          <div className="exps">
            <p>Apr 2020 - May 2022</p>
            <div>
              <h3>HTML,CSS,JavaScript and Bootstrap</h3>
              <p>Full Courses on Elzero Web School </p>
            </div>
          </div>
          <div className="exps">
            <p>Nov 2020 - Mar 2021</p>
            <div>
              <h3>Front-End Trainee</h3>
              <p>Eden adv</p>
            </div>
          </div>
          <div className="exps">
            <p>Aug 2021 - Feb 2022</p>
            <div>
              <h3>Nodejs</h3>
              <p>Coursera</p>
            </div>
          </div>
          <div className="exps">
            <p>Jul 2022 - Sep 2022</p>
            <div>
              <h3>React Full Course</h3>
              <p>Full Course in React.js in iTi - Mahara-tech</p>
            </div>
          </div>

          <img src="./girgiss.png" alt="gg" />
        </div>
      </div>
    </div>
  );
}
