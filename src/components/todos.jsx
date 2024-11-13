import Button from "./button";
import Input from "./input";
import TodoForm from "./todoListForm";
function Todos(props) {
  const { todos, isTodoFormOpened, setIsTodoFormOpened } = props;
  return (
    <section className="todos__section">
      <Button
        onClick={() => setIsTodoFormOpened(true)}
        className="new__todo__btn"
      >
        + New todo
      </Button>
      <h1 className="todos__section__title">Todos:</h1>
      {isTodoFormOpened ? <TodoForm /> : ""}
    </section>
  );
}

export default Todos;
