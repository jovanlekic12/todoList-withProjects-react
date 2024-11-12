import Button from "./button";
import Project from "./projectListItem";
import ProjectForm from "./projectsListForm";
import { useState } from "react";
function Projects(props) {
  const {
    projects,
    handleSubmitProject,
    setProjectName,
    projectName,
    isProjectFormOpened,
    setIsProjectFormOpened,
  } = props;

  return (
    <section className="projects__section">
      <Button
        onClick={() => setIsProjectFormOpened(true)}
        className="new__project__btn"
      >
        + New project
      </Button>
      <h1 className="projects__section__title">Projects:</h1>
      {isProjectFormOpened ? (
        <ProjectForm
          handleSubmitProject={handleSubmitProject}
          setProjectName={setProjectName}
          projectName={projectName}
        />
      ) : (
        ""
      )}
      <ul className="projects__list">
        {projects &&
          projects.map((project) => {
            return <Project name={project.name} key={project.id} />;
          })}
      </ul>
    </section>
  );
}

export default Projects;
