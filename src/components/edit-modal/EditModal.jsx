import React from "react";

const EditModal = ({ openModal, hide }) =>
  openModal ? (
    <form className="modal-container">
      <>
        <button type="button" onClick={hide}>
          X
        </button>
        <div>
          <h1>Edit todo</h1>
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

          <button className="modal-container__button__update">Update</button>
        </div>
      </>
    </form>
  ) : null;

export default EditModal;
