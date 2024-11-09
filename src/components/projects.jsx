import Button from "./button";
import Project from "./projectListItem";
import ProjectForm from "./projectsListForm";
import { useState } from "react";
function Projects(props) {
  const { projects, handleSubmitProject } = props;
  const [isFormOpened, setIsFormOpened] = useState(false);

  return (
    <aside className="projects__section">
      <Button
        onClick={() => setIsFormOpened(true)}
        className="new__project__btn"
      >
        + New project
      </Button>
      <h1 className="projects__section__title">Projects:</h1>
      {isFormOpened ? (
        <ProjectForm handleSubmitProject={handleSubmitProject} />
      ) : (
        ""
      )}
      <ul className="projects__list">
        {projects.map((project) => {
          <Project {...project} />;
        })}
      </ul>
    </aside>
  );
}

export default Projects;
