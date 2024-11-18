import Button from "./button";
import Input from "./input";

function Todo(props) {
  const { name, id, date, isChecked, handleDeleteTodo, selectedProjectId } =
    props;
  return (
    <li className="todo__list__item">
      <div className="todo__list__item__div">
        <h1>Title:</h1>
        <p>{name}</p>
      </div>
      <div className="todo__list__item__div">
        <h1>Date:</h1>
        <p>{date}</p>
      </div>
      <div className="todo__list__item__div">
        <Button>edit</Button>
        <Button onClick={() => handleDeleteTodo(selectedProjectId, id)}>
          delete
        </Button>
      </div>
      <Input type="checkbox" />
    </li>
  );
}

export default Todo;
