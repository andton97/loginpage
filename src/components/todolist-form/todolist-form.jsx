import React, { useState, useEffect, useRef } from "react";

const TodolistForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
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
