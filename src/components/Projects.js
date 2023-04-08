import ProjectsData from "./ProjectsData";
import ProjectCard from "./ProjectCard";

function Projects(props) {
  const color = props.mode ? "dark" : "light";
  const projectCards = ProjectsData.map((project) => {
    return (
      <ProjectCard
        title={project.title}
        techStack={project.tech_stack}
        link={project.link}
        theme={color}
      />
    );
  });
  return (
    <div className={`projects--section`} ref={props.activeDiv}>
      <div className="heading--container">
        <p className="heading">My Projects</p>
      </div>
      <div className="projects--container">{projectCards}</div>
      <div className="blob blob-three--position"></div>
    </div>
  );
}

export default Projects;
