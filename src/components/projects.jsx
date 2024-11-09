import Button from "./button";
import Project from "./projectListItem";

function Projects(props) {
  const { projects } = props;
  return (
    <aside className="projects__section">
      <Button>+ New project</Button>
      <h1 className="projects__section__title">Projects:</h1>
      <ul className="projects__list">
        {projects.map((project) => {
          <Project {...project} />;
        })}
      </ul>
    </aside>
  );
}

export default Projects;
