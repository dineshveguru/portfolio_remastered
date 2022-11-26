import TechImage from "./TechImage";

function ProjectCard(props) {
  const techImages = props.techStack.map((icon) => {
    return <TechImage image={icon} />;
  });
  return (
    <div className={`project--card ${props.theme}`}>
      <p>{props.title}</p>
      <div className="tech-image--container">{techImages}</div>
      {/* <button>View on GitHub</button> */}
      <a href={props.link} target="blank">
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
