import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Projects from "./components/projects";
import Todos from "./components/todos";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    id: self.crypto.randomUUID(),
    name: "",
    todos: [],
  });
  const [isProjectFormOpened, setIsProjectFormOpened] = useState(false);
  const [isTodoFormOpened, setIsTodoFormOpened] = useState(true);
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
    setIsTodoFormOpened(false);
  }

  function handleDeleteTodo(projectId, todoId) {
    const newProjects = projects.map((project) => {
      return project.id === projectId
        ? {
            ...project,
            todos: project.todos.filter((todo) => todo.id !== todoId),
          }
        : project;
    });
    setProjects(newProjects);
  }

  function handleAddTodo(id) {
    const newProjects = projects.map((project) => {
      return project.id === id
        ? { ...project, todos: [...project.todos, todo] }
        : project;
    });

    setProjects(newProjects);
  }

  function handleSubmitProject(event) {
    event.preventDefault();
    handleAddProject();
    setIsProjectFormOpened(false);
  }

  function handleDeleteProject(id) {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  }

  function handleAddProject() {
    setProject({ ...project, id: self.crypto.randomUUID() });
    setProjects((prev) => [...prev, project]);
  }

  function setActiveProject(index) {
    setIsTodoFormOpened(true);
    setActiveIndex(index);
  }

  return (
    <>
      <Header></Header>
      <main className="main__container">
        <Projects
          setActiveProject={setActiveProject}
          projects={projects}
          handleSubmitProject={handleSubmitProject}
          setProject={setProject}
          project={project}
          isProjectFormOpened={isProjectFormOpened}
          setIsProjectFormOpened={setIsProjectFormOpened}
          handleDeleteProject={handleDeleteProject}
        />
        {activeIndex !== null && (
          <Todos
            todos={projects[activeIndex].todos}
            isTodoFormOpened={isTodoFormOpened}
            setIsTodoFormOpened={setIsTodoFormOpened}
            setTodo={setTodo}
            todo={todo}
            selectedProjectId={projects[activeIndex].id}
            handleSubmitTodo={handleSubmitTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </main>
    </>
  );
}

export default App;
