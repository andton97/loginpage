import { useState } from "react";

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  function toggle() {
    setOpenModal(!openModal);
  }

  return { openModal, toggle, todoToEdit, setTodoToEdit  };
};

export default useModal;
