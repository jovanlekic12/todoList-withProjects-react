import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
function Project(props) {
  const {
    name,
    id,
    handleDeleteProject,
    setActiveProject,
    index,
    highlightedProject,
    setHighlightedProject,
  } = props;
  return (
    <li
      className={
        highlightedProject === index
          ? "projects__list__item active"
          : "projects__list__item"
      }
      onClick={() => {
        setHighlightedProject(index);
        setActiveProject(index);
      }}
    >
      <h1>{name}</h1>
      <RxCross2 onClick={() => handleDeleteProject(id, index)} />
    </li>
  );
}

export default Project;
