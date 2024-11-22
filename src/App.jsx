import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Projects from "./components/projects";
import Todos from "./components/todos";

function App() {
  const [showTodos, setShowTodos] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    id: self.crypto.randomUUID(),
    name: "",
    todos: [],
  });
  const [isProjectFormOpened, setIsProjectFormOpened] = useState(false);
  const [isTodoFormOpened, setIsTodoFormOpened] = useState(true);
  const [todo, setTodo] = useState({
    id: self.crypto.randomUUID(),
    name: "",
    date: "",
    isChecked: false,
    isEditing: false,
  });

  const activeProject = projects[activeIndex] ?? {
    id: self.crypto.randomUUID(),
    name: "",
    todos: [],
  };

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

  function handleCheckingTodo(event, projectId, todoId) {
    const newProjects = projects.map((project) => {
      return project.id === projectId
        ? {
            ...project,
            todos: project.todos.map((todo) => {
              return todo.id === todoId
                ? {
                    ...todo,
                    isChecked: event.target.checked,
                  }
                : todo;
            }),
          }
        : project;
    });
    setProjects(newProjects);
    console.log(projects);
  }

  function handleEditTodo(projectId, todoId) {
    const newProjects = projects.map((project) => {
      return project.id === projectId
        ? {
            ...project,
            todos: project.todos.map((todo) => {
              return todo.id === todoId
                ? { ...todo, isEditing: !todo.isEditing }
                : { ...todo, isEditing: false };
            }),
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

  function handleCancelProjectForm(event) {
    event.preventDefault();
    setIsProjectFormOpened(false);
  }

  function handleSubmitProject(event) {
    event.preventDefault();
    handleAddProject();
    setIsProjectFormOpened(false);
  }

  function handleDeleteProject(id, index) {
    if (index === activeIndex) {
      setActiveIndex(null);
      setShowTodos(false);
    }
    setProjects((prev) => prev.filter((project) => project.id !== id));
    if (projects.length === 0) {
      setShowTodos(false);
    }
  }

  function handleAddProject() {
    setProject({ ...project, id: self.crypto.randomUUID() });
    setProjects((prev) => [...prev, project]);
  }

  function setActiveProject(index) {
    setIsTodoFormOpened(false);
    setActiveIndex(index);
    if (!showTodos) setShowTodos(true);
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
          handleCancelProjectForm={handleCancelProjectForm}
        />
        {showTodos && projects && (
          <Todos
            todos={activeProject.todos}
            isTodoFormOpened={isTodoFormOpened}
            setIsTodoFormOpened={setIsTodoFormOpened}
            setTodo={setTodo}
            todo={todo}
            selectedProjectId={activeProject.id}
            handleSubmitTodo={handleSubmitTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCheckingTodo={handleCheckingTodo}
            handleEditTodo={handleEditTodo}
          />
        )}
      </main>
    </>
  );
}

export default App;
