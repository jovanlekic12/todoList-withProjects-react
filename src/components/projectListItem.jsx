import { RxCross2 } from "react-icons/rx";

function Project(props) {
  const { name, id, handleSelectedProject, handleDeleteProject } = props;

  console.log(props);
  return (
    <li
      className="projects__list__item"
      onClick={() => handleSelectedProject(id)}
    >
      <h1>{name}</h1>
      <RxCross2 onClick={() => handleDeleteProject(id)} />
    </li>
  );
}

export default Project;
