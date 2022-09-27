import Navbar from "./components/Navbar";
import React from "react";

function App() {
  const [mode, setMode] = React.useState(true);
  function changeMode() {
    setMode((prevMode) => !prevMode);
  }
  return (
    <div className="App">
      <Navbar mode={mode} onChange={changeMode} />
    </div>
  );
}

export default App;
