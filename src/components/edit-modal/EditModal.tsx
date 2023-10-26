import React from "react";
import "./EditModal.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import useTodoHook from "../todolist-form/todohook";
import { Todo } from "../../types/todos.types";

type EditModalType = {
  openModal: boolean;
  hide: () => void;
  todoToEdit: Todo | null;
};

const EditModal = ({ openModal, hide, todoToEdit }: EditModalType) => {
  const { updateTodo } = useTodoHook();

  if (!openModal) return null;

  const handleUpdateTodo = () => {
    if (todoToEdit) {
      updateTodo(todoToEdit.id, todoToEdit.text);
      hide();
    }
  };

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
            defaultValue={todoToEdit?.text}
            onChange={(e) => {
              if (todoToEdit) {
                todoToEdit.text = e.target.value;
              }
            }}
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
              onClick={handleUpdateTodo}
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
