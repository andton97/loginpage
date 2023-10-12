import React from "react";
import "./EditModal.css";
import { AiFillCloseCircle } from "react-icons/ai";
import useTodoHook from "../todolist-form/todohook";
import useModal from "./usemodal";

const EditModal = ({ openModal, hide, todoToEdit } ) => {
  const { updateTodo } = useTodoHook();
  const { setTodoToEdit } = useModal();


  
  if (!openModal) return null;

  return (
  <div className="overlay">
      <form className="modal-container">
        <>
          <div className="modal-container__title">
            <AiFillCloseCircle
              className="modal-container__title__closeButton"
              onClick={hide}
            />
            <h1 className="modal-container__title__text">Edit todo</h1>
          </div>

          <input
            type="text"
            placeholder="Update todo"
            name="text"
            className="modal-container__input"
            /* value={todoToEdit.text} */
            onChange={(e) => {const updatedTodo = { ...todoToEdit, text: e.target.value };         
            setTodoToEdit(updatedTodo);}}
          />

          <div className="modal-container__button">
            <button
              type="button"
              className="modal-container__button__cancel"
              onClick={hide}
            >
              Cancel
            </button>

            <button
              className="modal-container__button__update"
              onClick={() => {
                updateTodo(todoToEdit.id,todoToEdit);
              }}
            >
              Update
            </button>
          </div>
        </>
      </form>
      </div>
  );
};

export default EditModal;
