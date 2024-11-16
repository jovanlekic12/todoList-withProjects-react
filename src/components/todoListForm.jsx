import Button from "./button";
import Input from "./input";

function TodoForm({ todo, setTodo, handleSubmitTodo, selectedProjectId }) {
  return (
    <form
      className="todo__list__form"
      onSubmit={(event) => handleSubmitTodo(event, selectedProjectId)}
    >
      <div className="todo__form__container">
        <div className="todo__form__div">
          <label className="todo__form__label">Title:</label>
          <Input
            type="text"
            className="todo__form__input"
            placeHolder="My todo"
            onChange={(event) =>
              setTodo({
                ...todo,
                name: event.target.value,
                id: self.crypto.randomUUID(),
              })
            }
          ></Input>
        </div>
        <div className="todo__form__div">
          <label className="todo__form__label">Date:</label>
          <Input
            type="date"
            className="todo__form__input"
            onChange={(event) => setTodo({ ...todo, date: event.target.value })}
          ></Input>
        </div>
      </div>
      <div className="todo__form__btn__div">
        <Button className="todo__form__add__btn">Add</Button>
        <Button className="todo__form__cancel__btn">Cancel</Button>
      </div>
    </form>
  );
}

export default TodoForm;
