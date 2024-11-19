import { useState } from "react";
import Button from "./button";
import Input from "./input";
import TodoEditForm from "./todoEditForm";
function Todo(props) {
  const {
    name,
    id,
    date,
    isChecked,
    isEditing,
    handleDeleteTodo,
    selectedProjectId,
    handleCheckingTodo,
    handleEditTodo,
  } = props;

  const [todoName, setTodoName] = useState(name);
  const [todoDate, setTodoDate] = useState(date);

  return (
    <li className="todo__list__item">
      {isEditing ? (
        <TodoEditForm
          todoDate={todoDate}
          todoName={todoName}
          setTodoName={setTodoName}
          setTodoDate={setTodoDate}
          id={id}
          isChecked={isChecked}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckingTodo={handleCheckingTodo}
          handleEditTodo={handleEditTodo}
          selectedProjectId={selectedProjectId}
        />
      ) : (
        <div className="todo__list__item__container">
          <div className="todo__list__item__div">
            <h1>Title:</h1>
            <p>{todoName}</p>
          </div>
          <div className="todo__list__item__div">
            <h1>Date:</h1>
            <p>{todoDate}</p>
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
            onChange={(event) =>
              handleCheckingTodo(event, selectedProjectId, id)
            }
            value={isChecked}
            className="checkbox"
          />
        </div>
      )}
    </li>
  );
}
export default Todo;
