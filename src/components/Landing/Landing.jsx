import React, { useEffect, useRef } from "react";
import "./Landing.css";
import { FiDownload } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { RiGithubLine, RiCodepenFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";

export default function Landing() {
  useEffect(() => {
    // Update the document title using the browser API
    const texts = ["Girgis Nabil", "Front End", "Creative !"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      document.querySelector(".typing").textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(type, 400);
    })();
  });

  return (
    <div className="container ">
      <div className="Landing zigzag">
        <div className="left-section">
          <h1 className="h1">Hay! I Am</h1>

          <h1 className="typing"></h1>
          <div className="paragraph">
            <div></div>
            <p>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </p>
          </div>
          <div className="buttons">
            <div className="download-cv">
              <p>
                <a href="/" download="Girgis-nabil.pdf">
                  Download CV
                </a>
              </p>

              <FiDownload className="icon" />
            </div>
          </div>

          <div className="end">
            <p>check out my</p>
            <div>
              <a
                href="https://github.com/GirgisNabil"
                rel="noreferrer"
                target="_blank"
              >
                <RiGithubLine className="icon" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/girgis-nabil-aa53111b1/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn className="icon" />
              </a>
            </div>
            <div>
              <a
                href="https://codepen.io/kuarii"
                rel="noreferrer"
                target="_blank"
              >
                <RiCodepenFill className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src="./girgisss.png" alt="ggwp" />
          <p>
            " People ignore design <br />
            that ignores people "
          </p>
        </div>
      </div>
    </div>
  );
}
