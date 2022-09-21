import React, { useEffect } from "react";
import "./Slider.css";
import gsap from "gsap";

export default function Silder() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  });
  return (
    <React.Fragment>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Creating inovation</span>
          </h1>
          <h1 className="hide">
            <span className="text">For Everyday</span>
          </h1>
          <h1 className="hide">
            <span className="text">people.</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>;
    </React.Fragment>
  );
}
