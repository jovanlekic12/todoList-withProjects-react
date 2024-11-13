function Project(props) {
  const { name, id, handleSelectedProject } = props;

  console.log(props);
  return (
    <li
      className="projects__list__item"
      onClick={() => handleSelectedProject(id)}
    >
      <h1>{name}</h1>
    </li>
  );
}

export default Project;
