import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";
import { Todo } from "../../types/todos.types";

type TodoListFormProps = { onSubmit: (todo: Todo) => void };

const TodolistForm = ({ onSubmit }: TodoListFormProps) => {
  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e?.target?.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <>
        <input
          type="text"
          placeholder="Add todo"
          value={input}
          name="text"
          className="todo-form__input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-form__button">Add Todo</button>
      </>
    </form>
  );
};

export default TodolistForm;
