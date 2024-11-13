import Button from "./button";
import Input from "./input";

function TodoForm(props) {
  return (
    <form className="todo__list__form">
      <div className="todo__form__container">
        <div className="todo__form__div">
          <label className="todo__form__label">Title:</label>
          <Input
            type="text"
            className="todo__form__input"
            placeHolder="My todo"
          ></Input>
        </div>
        <div className="todo__form__div">
          <label className="todo__form__label">Date:</label>
          <Input type="date" className="todo__form__input"></Input>
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
