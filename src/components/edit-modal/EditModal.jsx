import React from "react";
import "./EditModal.css";
import { AiFillCloseCircle } from "react-icons/ai";
import useTodoHook from "../todolist-form/todohook";

const EditModal = ({ openModal, hide }) => {
  const { updateTodo, todos } = useTodoHook();
  return todos.map((todo, index) =>
    openModal ? (
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
                updateTodo();
              }}
            >
              Update
            </button>
          </div>
        </>
      </form>
    ) : null
  );
};

export default EditModal;
