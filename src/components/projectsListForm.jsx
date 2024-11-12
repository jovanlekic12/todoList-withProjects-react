import Button from "./button";
import Input from "./input";

function ProjectForm(props) {
  const { handleSubmitProject, setProjectName, projectName, setIsFormOpened } =
    props;

  return (
    <form onSubmit={(event) => handleSubmitProject(event, projectName)}>
      <Input
        placeHolder="Add new project"
        className="project__input"
        type="text"
        onChange={(event) => setProjectName(event.target.value)}
        required
      />
      <div>
        <Button
          className="project__form__btn"
          onClick={(event) => handleSubmitProject(event, projectName)}
        >
          Add
        </Button>
        <Button className="project__form__btn">Cancel</Button>
      </div>
    </form>
  );
}
export default ProjectForm;
