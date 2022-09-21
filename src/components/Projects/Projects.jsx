import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Projects " id="projects">
      <div className="container zigzag">
        <div className="box-container1" data-aos="fade-right">
          <h1>Latest Projcets</h1>
          <ProjectCard
            title="Kasper Template Design"
            subtitle="Web/Single Page Website"
            img="./imgs/Kasper.png"
            refff="https://girgisnabil.github.io/Kasper-Template/"
          />
        </div>
        <div className="box-container2" data-aos="fade-up">
          <ProjectCard
            title="Elzero Template Design"
            subtitle="Web/Single Page Website"
            img="./imgs/Elzero.png"
            refff="https://girgisnabil.github.io/Elzero-Template/"
          />
        </div>
        <div className="box-container3" data-aos="fade-left">
          <ProjectCard
            title="3D Faculty Application"
            subtitle="WebGL/Single Page Application"
            img="./imgs/3D.png"
            refff="https://girgisnabil.github.io/3D-website/"
          />
        </div>
      </div>
    </div>
  );
}
