import Button from "./button";
import Input from "./input";

function TodoEditForm(props) {
  const {
    todoName,
    setTodoName,
    todoDate,
    setTodoDate,
    isChecked,
    selectedProjectId,
    id,
    handleDeleteTodo,
    handleEditTodo,
    handleCheckingTodo,
  } = props;
  return (
    <div className="todo__list__item__container">
      <div className="todo__list__item__div">
        <h1>Title:</h1>
        <Input
          value={todoName}
          type="text"
          className="todo__edit__form__input"
          onChange={(event) => setTodoName(event.target.value)}
        ></Input>
      </div>
      <div className="todo__list__item__div">
        <h1>Date:</h1>
        <Input
          placeHolder={todoDate}
          value={todoDate}
          type="date"
          className="todo__edit__form__input"
          onChange={(event) => setTodoDate(event.target.name)}
        ></Input>
      </div>
      <div className="todo__list__item__div">
        <Button onClick={() => handleEditTodo(selectedProjectId, id)}>
          edit
        </Button>
        <Button onClick={() => handleDeleteTodo(selectedProjectId, id)}>
          delete
        </Button>
      </div>
      <Input
        type="checkbox"
        onChange={(event) => handleCheckingTodo(event, selectedProjectId, id)}
        value={isChecked}
        className="checkbox"
      />
    </div>
  );
}

export default TodoEditForm;
