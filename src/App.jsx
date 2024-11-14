import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Projects from "./components/projects";
import Todos from "./components/todos";

function App() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [isProjectFormOpened, setIsProjectFormOpened] = useState(false);
  const [isTodoFormOpened, setIsTodoFormOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  function handleSubmitProject(event, name) {
    event.preventDefault();
    handleAddProject(name);
    setIsProjectFormOpened(false);
  }

  function handleSelectedProject(id) {
    const selected = projects.find((project) => project.id === id);
    setSelectedProject(selected);
    setIsTodoFormOpened(false);
  }

  function handleDeleteProject(id) {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  }

  function handleAddProject(name) {
    const newItem = {
      id: self.crypto.randomUUID(),
      name: name,
      todos: [],
    };
    setProjects((prev) => [...prev, newItem]);
  }

  return (
    <>
      <Header></Header>
      <main className="main__container">
        <Projects
          projects={projects}
          handleSubmitProject={handleSubmitProject}
          setProjectName={setProjectName}
          projectName={projectName}
          isProjectFormOpened={isProjectFormOpened}
          setIsProjectFormOpened={setIsProjectFormOpened}
          handleSelectedProject={handleSelectedProject}
          handleDeleteProject={handleDeleteProject}
        />
        {selectedProject && (
          <Todos
            todos={selectedProject.todos}
            isTodoFormOpened={isTodoFormOpened}
            setIsTodoFormOpened={setIsTodoFormOpened}
          />
        )}
      </main>
    </>
  );
}

export default App;
