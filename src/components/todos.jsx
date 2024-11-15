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
        />
      ) : (
        ""
      )}
      <ul className="projects__list">
        {todos &&
          todos.map((todo) => {
            return <Todo name={todo.name} id={todo.id} key={todo.id} />;
          })}
      </ul>
    </section>
  );
}

export default Todos;
