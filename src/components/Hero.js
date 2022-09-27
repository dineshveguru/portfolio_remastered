function Hero() {
  return (
    <div className="hero-container">
      <h1>Hello, There</h1>
      <h1>
        I am <span>Dinesh</span>
      </h1>
      <p>Designer + Developer</p>
      <button>Download Resume</button>
      <p>Scroll down</p>
      <img src={require(`../asset/scroll_dark.png`)} />
    </div>
  );
}

export default Hero;
