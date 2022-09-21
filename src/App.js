import Navbar from "./components/navbar/navbar";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/navbar/Nav";
import "./components/navbar/navbar.css";

import { BsWhatsapp, BsMoon } from "react-icons/bs";

import { FiSearch, FiMenu } from "react-icons/fi";

import "./App.css";
import "./leon.css";
import React, { useState, useRef } from "react";
import Silder from "./components/Slider/Slider";
import Loading from "./components/Loading/Loading";

function App() {
  let [count, setCount] = useState(1);
  const addOne = (number) => {
    setCount((count = number));
  };

  // let [loading, setLoading] = useState(false);
  // useRef(() => {
  //   setLoading((loading = true));
  // });
  return (
    <React.Fragment>
      <div className="App">
        {count === 1 ? <Landing /> : ""}
        {count === 2 ? <Projects /> : ""}
        {count === 3 ? <Skills /> : ""}
        {count === 4 ? <Contact /> : ""}

        <Nav do={addOne} />

        <Silder />
      </div>
    </React.Fragment>
  );
}

export default App;
