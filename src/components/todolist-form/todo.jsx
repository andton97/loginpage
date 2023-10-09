import React from "react";
import useTodoHook from "./todohook";
import TodolistForm from "./todolist-form";
import TodoList from "./todo-list";
import "./todo.css";
import EditModal from "../edit-modal/EditModal";
import useModal from "./usemodal";

function Todo() {
  const { addTodo, removeTodo, completeTodo, todos } = useTodoHook();

  const { openModal, toggle } = useModal();

  return (
    <>
      <div className="todo-container">
        <h1>TODO LIST</h1>
        <TodolistForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
        <EditModal openModal={openModal} hide={toggle} />
      </div>
    </>
  );
}

export default Todo;
