function Hero(props) {
  const color = props.mode ? "dark" : "light";
  const theme = props.mode ? "light" : "dark";
  return (
    <div className="hero-top">
      <div className={`hero-container hero--${color}`}>
        <div className="name-banner">
          <h1>Hello, there👋</h1>
          <h1>
            I am <span>Dinesh</span>
          </h1>
          <p className="skill-banner">
            <span className="designer">Designer</span>+
            <span className="developer">Developer</span>
          </p>
          <button className="resume-download--button">Download Resume</button>
        </div>
        <div className="scroll-banner">
          <p>Scroll down</p>
          <img
            src={require(`../asset/scroll_${theme}.png`)}
            className="scroll-down--image"
          />
        </div>
        <div className="blob blob-one--position"></div>
      </div>
    </div>
  );
}

export default Hero;
