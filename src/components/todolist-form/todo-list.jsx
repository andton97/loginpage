import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import useModal from "../edit-modal/usemodal";
import EditModal from "../edit-modal/EditModal";

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  const { openModal, toggle, setTodoToEdit, todoToEdit } = useModal(); 


  const handleEditClick = (todo) => {
    setTodoToEdit(todo);
    toggle();
  };

  return (
    <>
      {todos.map((todo,index) => (
        <div
          className={todo.isComplete ? "todo-complete" : "todo-uncomplete"}
          key={index}
        >
          <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="remove-icon"
            />
            <TiEdit
              className="edit-icon"
              onClick={() => handleEditClick(todo)} 
            />
          </div>
        </div>
      ))}
      <div>
        <EditModal openModal={openModal} hide={toggle} todoToEdit = {todoToEdit}/>
      </div>
    </>
  );
};

export default TodoList;

