import React from "react";
import useTodoHook from "./todohook";
import TodolistForm from "./todolist-form";
import TodoList from "./todo-list";
import "./todo.css";

function Todo() {
  const { addTodo, removeTodo, completeTodo, todos } = useTodoHook();

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
      </div>
    </>
  );
}

export default Todo;
