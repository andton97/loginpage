import React, { useEffect, useState } from "react";
import useTodoHook from "./todohook";
import TodolistForm from "./todolist-form";
import TodoList from "./todo-list";
import FilterBy from "../filter-by/filter-by";
import "./todo.scss";
import SearchBar from "../search-bar/search-bar";

function Todo() {
  const [currentFilter, setCurrentFilter] = useState("All");
  const { addTodo, removeTodo, completeTodo, todos } = useTodoHook();

  const onFilterValueSelected = (filterValue: string) => {
    setCurrentFilter(filterValue);
  };

  return (
    <>
      <div className="todo-container">
        <h1>TODO LIST</h1>
        <div className="todo-container__searchBy">
          <SearchBar />
          <FilterBy onFilterValueSelected={onFilterValueSelected} />
        </div>

        <TodolistForm onSubmit={addTodo} />
        <div className="todo-container__todoList">
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            currentFilter={currentFilter}
          />
        </div>
      </div>
    </>
  );
}

export default Todo;
