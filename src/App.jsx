import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Projects from "./components/projects";

function App() {
  const [projects, setProjects] = useState([]);
  const [todos, setTodos] = useState({});
  const [projectName, setProjectName] = useState("");
  const [isProjectFormOpened, setIsProjectFormOpened] = useState(false);

  function handleSubmitProject(event, name) {
    event.preventDefault();
    handleAddProject(name);
    setIsProjectFormOpened(false);
    console.log(projects);
  }

  function handleAddProject(name) {
    const newItem = {
      id: self.crypto.randomUUID(),
      name: name,
    };
    setProjects((prev) => [...prev, newItem]);
  }

  function handleAddTodo(name) {
    const newItem = {
      id: self.crypto.randomUUID(),
      name: name,
    };
    setTodos((prev) => [...prev, newItem]);
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
        />
      </main>
    </>
  );
}

export default App;
