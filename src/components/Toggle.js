import "./components.css";

function Toggle(props) {
  return (
    <div className="toggle-up-container">
      <div className={`Toggle--container ${props.theme}`}>
        <div
          className={`toggle-button toggle-${props.color} ${props.color}`}
        ></div>
      </div>
    </div>
  );
}

export default Toggle;
