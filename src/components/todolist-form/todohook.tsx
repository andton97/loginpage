import { useState } from "react";
import { Todo } from "../../types/todos.types";

const useTodoHook = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const removeFromList = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeFromList);
  };

  const updateTodo = (todoId: number, newValue: string) => {
    if (!newValue.trim()) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) =>
        item.id === todoId ? { ...item, text: newValue } : item
      )
    );
  };
  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    const completedTodos = updatedTodos.filter((todo) => todo.isComplete);
    const incompleteTodos = updatedTodos.filter((todo) => !todo.isComplete);

    const newTodos = incompleteTodos.concat(completedTodos);

    setTodos(newTodos);
  };

  return {
    addTodo,
    removeTodo,
    completeTodo,
    updateTodo,
    todos,
  };
};

export default useTodoHook;
