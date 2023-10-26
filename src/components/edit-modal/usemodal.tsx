import { useState } from "react";
import { Todo } from "../../types/todos.types";

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<null | Todo>(null);

  function toggle() {
    setOpenModal(!openModal);
  }

  return { openModal, toggle, todoToEdit, setTodoToEdit };
};

export default useModal;
