import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import useModal from "../edit-modal/usemodal";
import EditModal from "../edit-modal/EditModal";
import { Todo } from "../../types/todos.types";

type TodoListType = {
  todos: Todo[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  currentFilter: string;
};

const TodoList = ({
  todos,
  completeTodo,
  removeTodo,
  currentFilter,
}: TodoListType) => {
  const { openModal, toggle, setTodoToEdit, todoToEdit } = useModal();

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleEditClick = (todo: Todo) => {
    setTodoToEdit(todo);
    toggle();
  };
  useEffect(() => {
    console.log(todos);
    let newTodos = [...todos];
    switch (currentFilter) {
      case "All":
        break;
      case "Complete":
        newTodos = [...todos].filter((todo) => todo.isComplete);
        break;
      case "Incomplete":
        newTodos = [...todos].filter((todo) => !todo.isComplete);
        break;
    }

    setFilteredTodos(newTodos);
  }, [todos, currentFilter]);

  return (
    <>
      {filteredTodos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-complete" : "todo-incomplete"}
          key={index}
        >
          <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="remove-icon"
            />
            <TiEdit
              className="edit-icon"
              onClick={() => handleEditClick(todo)}
            />
          </div>
        </div>
      ))}
      <div>
        <EditModal
          openModal={openModal}
          hide={toggle}
          todoToEdit={todoToEdit}
        />
      </div>
    </>
  );
};

export default TodoList;
