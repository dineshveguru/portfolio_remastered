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
    <div className={`nav-bar--container ${color}`}>
      <div className="nav-items--container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Certifications</li>
          <li>Contact me</li>
        </ul>
      </div>
      <Toggle {...themes} />
    </div>
  );
}

export default Navbar;
