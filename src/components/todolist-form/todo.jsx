import React from "react";
import useTodoHook from "./todohook";
import TodolistForm from "./todolist-form";
import TodoList from "./todo-list";
import "./todo.css";
import EditModal from "../edit-modal/EditModal";

function Todo() {
  const {
    addTodo,
    removeTodo,
    updateTodo,
    completeTodo,
    setOpenModal,
    openModal,
    todos,
  } = useTodoHook();

  return (
    <>
      <div className="todo-container">
        <h1>TODO LIST</h1>
        <TodolistForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
        {openModal && <EditModal />}
      </div>
    </>
  );
}

export default Todo;
