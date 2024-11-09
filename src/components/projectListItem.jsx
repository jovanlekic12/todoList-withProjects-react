function Project(props) {
  const { name } = props;
  return <li className="projects__list__item">{name}</li>;
}

export default Project;
