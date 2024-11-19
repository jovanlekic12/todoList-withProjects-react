import { RxCross2 } from "react-icons/rx";

function Project(props) {
  const { name, id, handleDeleteProject, setActiveProject, index } = props;

  return (
    <li
      className="projects__list__item"
      onClick={() => setActiveProject(index)}
    >
      <h1>{name}</h1>
      <RxCross2 onClick={() => handleDeleteProject(id, index)} />
    </li>
  );
}

export default Project;
