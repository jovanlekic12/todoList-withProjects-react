import Button from "./button";
import Input from "./input";
import TodoForm from "./todoListForm";
import Todo from "./todoListItem";

function Todos(props) {
  const {
    todos,
    isTodoFormOpened,
    setIsTodoFormOpened,
    todo,
    setTodo,
    handleSubmitTodo,
    selectedProjectId,
    handleDeleteTodo,
    handleCheckingTodo,
    handleEditTodo,
  } = props;
  return (
    <section className="todos__section">
      <Button
        onClick={() => setIsTodoFormOpened(true)}
        className="new__todo__btn"
      >
        + New todo
      </Button>
      <h1 className="todos__section__title">Todos:</h1>
      {isTodoFormOpened ? (
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          handleSubmitTodo={handleSubmitTodo}
          selectedProjectId={selectedProjectId}
          setIsTodoFormOpened={setIsTodoFormOpened}
        />
      ) : (
        ""
      )}
      <ul className="todos__list">
        {todos &&
          todos.map((todo) => {
            return (
              <Todo
                name={todo.name}
                date={todo.date}
                id={todo.id}
                key={todo.id}
                isChecked={todo.isChecked}
                isEditing={todo.isEditing}
                handleDeleteTodo={handleDeleteTodo}
                selectedProjectId={selectedProjectId}
                handleCheckingTodo={handleCheckingTodo}
                handleEditTodo={handleEditTodo}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default Todos;
