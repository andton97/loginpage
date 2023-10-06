import React from "react";

function EditModal() {
  return (
    <form className="modal-container">
      <>
        <button> X </button>
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
          <button className="modal-container__button__cancel">Cancel</button>

          <button className="modal-container__button__update">Update</button>
        </div>
      </>
    </form>
  );
}

export default EditModal;

/*modal-background?*/
