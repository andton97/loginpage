import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import useTodoHook from "./todohook";

const TodoList = ({ todos, completeTodo, removeTodo, setOpenModal }) => {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-complete" : "todo-uncomplete"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="remove-icon"
        />

        <TiEdit
          className="edit-icon"
          onClick={() => {
            setOpenModal(true);
          }}
        />
      </div>
    </div>
  ));
};

export default TodoList;
