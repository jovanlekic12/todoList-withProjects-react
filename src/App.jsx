import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Projects from "./components/projects";
import Todos from "./components/todos";

function App() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [isProjectFormOpened, setIsProjectFormOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  function handleSubmitProject(event, name) {
    event.preventDefault();
    handleAddProject(name);
    setIsProjectFormOpened(false);
  }

  function handleSelectedProject(id) {
    const selected = projects.find((project) => project.id === id);
    setSelectedProject(selected);
    console.log(selectedProject);
  }

  function handleAddProject(name) {
    const newItem = {
      id: self.crypto.randomUUID(),
      name: name,
      isSelected: false,
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
        />
        {selectedProject && <Todos todos={selectedProject.todos} />}
      </main>
    </>
  );
}

export default App;
