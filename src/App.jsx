import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Projects from "./components/projects";

function App() {
  const [projects, setProjects] = useState([]);
  const [todos, setTodos] = useState({});

  return (
    <>
      <Header></Header>
      <main className="main__container">
        <Projects projects={projects} />
      </main>
    </>
  );
}

export default App;
