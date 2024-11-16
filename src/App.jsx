import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Projects from "./components/projects";
import Todos from "./components/todos";

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    id: self.crypto.randomUUID(),
    name: "",
    todos: [],
  });
  const [isProjectFormOpened, setIsProjectFormOpened] = useState(false);
  const [isTodoFormOpened, setIsTodoFormOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState();
  const [todo, setTodo] = useState({
    id: self.crypto.randomUUID(),
    name: "",
    date: "",
    isChecked: false,
  });

  function handleSubmitTodo(event, id) {
    event.preventDefault();
    handleAddTodo(id);
  }

  function handleAddTodo(id) {
    const newProjects = projects.map((project) => {
      return project.id === id
        ? { ...project, todos: [...project.todos, todo] }
        : project;
    });
    setProjects(newProjects);
    setSelectedProject(projects.find((project) => project.id === id));
    console.log(projects);
  }

  function handleSubmitProject(event) {
    event.preventDefault();
    handleAddProject();
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

  function handleAddProject() {
    setProject({ ...project, id: self.crypto.randomUUID() });
    setProjects((prev) => [...prev, project]);
  }

  return (
    <>
      <Header></Header>
      <main className="main__container">
        <Projects
          projects={projects}
          handleSubmitProject={handleSubmitProject}
          setProject={setProject}
          project={project}
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
            setTodo={setTodo}
            todo={todo}
            handleSubmitTodo={handleSubmitTodo}
            selectedProjectId={selectedProject.id}
          />
        )}
      </main>
    </>
  );
}

export default App;
