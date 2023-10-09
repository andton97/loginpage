import { useState } from "react";

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  function toggle() {
    setOpenModal(!openModal);
  }

  return { openModal, toggle };
};

export default useModal;
