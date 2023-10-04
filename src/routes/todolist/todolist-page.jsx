import "../../components/todolist-form/todolist-form.css";
import "./todolist-page.css";
import TodoHandler from "../../components/todolist-form/todo-handler";

const ToDoListPage = () => {
  return (
    <div className="todo-page">
      <TodoHandler />
    </div>
  );
};

export default ToDoListPage;
