import "./components/login-form/login-form.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "./routes/login/login-page";
import ToDoListPage from "./routes/todolist/todolist-page";
import PresentationPage from "./routes/presentation/presentation-page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/todolist" Component={ToDoListPage} />
        <Route exact path="/login" Component={LoginPage} />
        <Route path="/" Component={PresentationPage} />
      </Routes>
    </Router>
  );
};

export default App;
