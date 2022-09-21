import React, { useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import "./nav.css";

export default function Navbar(props) {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
  });
  return (
    <div className="top">
      <div className="navigation">
        <ul>
          <li className="list active">
            <a href="#" onClick={() => props.do(1)}>
              <span className="icon">
                <IoHomeOutline />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={() => props.do(3)}>
              <span className="icon">
                <GiSkills />
              </span>
              <span className="text">Skills</span>
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={() => props.do(2)}>
              <span className="icon">
                <GrProjects />
              </span>
              <span className="text">Projects</span>
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={() => props.do(4)}>
              <span className="icon">
                <MdContacts />
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}
