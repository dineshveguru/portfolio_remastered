import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [mode, setMode] = React.useState(true);
  function changeMode() {
    setMode((prevMode) => !prevMode);
  }
  return (
    <div className="App">
      <Navbar mode={mode} onChange={changeMode} />
      <Hero mode={mode} />
      <About mode={mode} />
    </div>
  );
}

export default App;
