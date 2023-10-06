import { useState } from "react";

const useTodoHook = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeFromList = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeFromList);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const [openModal, setOpenModal] = useState(false);

  return {
    addTodo,
    removeTodo,
    updateTodo,
    completeTodo,
    setOpenModal,
    openModal,
    todos,
  };
};

export default useTodoHook;
