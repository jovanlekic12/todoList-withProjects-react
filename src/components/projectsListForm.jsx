import Button from "./button";
import Input from "./input";

function ProjectForm(props) {
  const { handleSubmitProject, setProject, project } = props;

  return (
    <form
      className="projects__list__form"
      onSubmit={(event) => handleSubmitProject(event)}
    >
      <Input
        placeHolder="Add new project"
        className="project__input"
        type="text"
        onChange={(event) =>
          setProject({ ...project, name: event.target.value })
        }
        required
      />
      <div>
        <Button
          className="project__form__btn"
          onClick={(event) => handleSubmitProject(event)}
        >
          Add
        </Button>
        <Button className="project__form__btn">Cancel</Button>
      </div>
    </form>
  );
}
export default ProjectForm;
