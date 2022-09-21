import React from "react";
import "./Contact.css";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { CgHello } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
export default function Contact() {
  return (
    <div className="contact zigzag">
      <div className="container" id="contact">
        <div className="left">
          <h1>Let's Discuss Your Project</h1>
          <div className="single-contact">
            <i>
              {" "}
              <BsFillChatSquareDotsFill />
            </i>
            <div>
              <p>Email</p>
              <h2>Girgis.n.lotfi@gmail.com</h2>
            </div>
          </div>
          <div className="single-contact">
            <i>
              <FaMobileAlt />
            </i>
            <div>
              <p>Phone</p>
              <h2>20-1228313626</h2>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="circule">
            <div className="sayhi">
              <i>
                <CgHello />
              </i>
              <span>say Hi!</span>
            </div>
            <div className="link">
              <BsArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
