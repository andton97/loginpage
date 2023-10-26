import React from "react";
import useTodoHook from "./todohook";
import TodolistForm from "./todolist-form";
import TodoList from "./todo-list";
import "./todo.scss";

function Todo() {
  const { addTodo, removeTodo, completeTodo, todos } = useTodoHook();

  return (
    <>
      <div className="todo-container">
        <h1>TODO LIST</h1>
        <TodolistForm onSubmit={addTodo} />
        <div className="todo-container__todoList">
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        </div>
      </div>
    </>
  );
}

export default Todo;
