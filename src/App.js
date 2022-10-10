import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Nav from "./components/navbar/Nav";
import "./components/navbar/navbar.css";
import "./App.css";
import "./leon.css";
import React, { useState } from "react";
import Silder from "./components/Slider/Slider";

function App() {
  let [count, setCount] = useState(1);
  const addOne = (number) => {
    setCount((count = number));
  };

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
