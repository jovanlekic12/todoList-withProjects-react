import Button from "./button";
import Input from "./input";

function ProjectForm(props) {
  const { handleSubmitProject } = props;

  return (
    <form onSubmit={handleSubmitProject}>
      <Input
        placeHolder="Add new project"
        className="project__input"
        type="text"
      />
      <div>
        <Button className="project__form__btn" onClick={handleSubmitProject}>
          Add
        </Button>
        <Button className="project__form__btn">Cancel</Button>
      </div>
    </form>
  );
}
export default ProjectForm;
