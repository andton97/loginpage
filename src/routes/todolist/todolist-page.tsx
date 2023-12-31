import "./todolist-page.scss";
import Todo from "../../components/todolist-form/todo";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const ToDoListPage = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    const body = document.body;
    body.dataset.theme = body.dataset.theme === "light" ? "dark" : "light";
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="todo-page-form" id="light">
        <Todo />
      </div>
      <div className="switch">
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"} </label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </ThemeContext.Provider>
  );
};

export default ToDoListPage;
