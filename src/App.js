import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
function App() {
  const [mode, setMode] = React.useState(true);
  function changeMode() {
    setMode((prevMode) => !prevMode);
  }
  const theme = mode ? "dark" : "light";
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const handleHeroClick = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const clickEvents = {
    hero: handleHeroClick,
    about: handleAboutClick,
    projects: handleProjectsClick,
  };
  return (
    <div className={`app-container hero--${theme}`}>
      <Navbar mode={mode} onChange={changeMode} clickEvents={clickEvents} />
      <Hero mode={mode} activeDiv={heroRef} />
      <About mode={mode} activeDiv={aboutRef} />
      <Projects mode={mode} activeDiv={projectsRef} />
    </div>
  );
}

export default App;
