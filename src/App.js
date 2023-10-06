import './components/login-form/login-form.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LoginPage from './routes/login/login-page';
import ToDoListPage from './routes/todolist/todolist-page';


const App = () => {
  return (
    <Router>
      <Routes> 
        
        <Route exact path = "/todolist" Component={ToDoListPage} />
        <Route  path = "/"  Component= {LoginPage} />
        
      </Routes>
    </Router>
  ) 
}

export default App

