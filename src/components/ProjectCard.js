import TechImage from "./TechImage";

function ProjectCard(props) {
  const techImages = props.techStack.map((icon) => {
    return <TechImage image={icon} />;
  });
  return (
    <div className="project--card">
      <p>{props.title}</p>
      <div className="tech-image--container">{techImages}</div>
      <button>View on GitHub</button>
    </div>
  );
}

export default ProjectCard;
