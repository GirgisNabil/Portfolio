import React from "react";
import "./navbar.css";
import "../leon.css";
import { BsWhatsapp, BsMoon } from "react-icons/bs";

import { FiSearch, FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <div className="logo">
          Girgis
          <BsMoon />
        </div>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="search" id="searchh">
          <input type="text" placeholder="Search" />
          <FiSearch className="fa-thin search-icon " />
        </div>
        <FiMenu className="menu-icon" />
      </div>
    </div>
  );
}
