import "./components.css";
import Toggle from "./Toggle";

function Navbar(props) {
  const color = props.mode ? "dark" : "light";
  const theme = props.mode ? "light" : "dark";
  let themes = {
    color: color,
    theme: theme,
    onChange: props.onChange,
  };
  return (
    <div className="nav-top">
      <div className={`nav-bar--container ${color}`}>
        <div className="nav-items--container">
          <ul>
            <li onClick={props.clickEvents.hero} className="nav--items">
              Home
            </li>
            <li onClick={props.clickEvents.about} className="nav--items">
              About
            </li>
            <li onClick={props.clickEvents.projects} className="nav--items">
              Projects
            </li>
          </ul>
        </div>
        <Toggle {...themes} />
      </div>
    </div>
  );
}

export default Navbar;
