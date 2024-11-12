function Project(props) {
  const { name, id } = props;
  return (
    <li className="projects__list__item">
      <h1>{name}</h1>
    </li>
  );
}

export default Project;
