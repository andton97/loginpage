import "./todolist-page.css";
import Todo from "../../components/todolist-form/todo";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);


const ToDoListPage = () => {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
          <div className="todo-page-form" id="light">
            <Todo /> 
          </div>
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            <ReactSwitch onChange={toggleTheme} checked = {theme === "dark"}/>
            </div>
          
    </ThemeContext.Provider>
  );
};

export default ToDoListPage;
