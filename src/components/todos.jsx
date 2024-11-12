import Button from "./button";
import Input from "./input";

function Todos(props) {
  const { todos } = props;
  return (
    <section className="todos__section">
      <Button>+ New todo</Button>
    </section>
  );
}

export default Todos;
