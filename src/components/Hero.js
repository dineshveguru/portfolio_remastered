function Hero() {
  return (
    <div className="hero-container hero--dark">
      <div className="name-banner">
        <h1>Hello, there👋</h1>
        <h1>
          I am <span>Dinesh</span>
        </h1>
        <p className="skill-banner">
          <span className="designer">Designer</span> +
          <span className="developer">Developer</span>
        </p>
        <button>Download Resume</button>
      </div>
      <div className="scroll-banner">
        <p>Scroll down</p>
        <img src={require(`../asset/scroll_dark.png`)} />
      </div>
    </div>
  );
}

export default Hero;
