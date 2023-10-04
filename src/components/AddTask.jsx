import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as styles from "./css/AddTask.css";

import Button from "./Button";

export default function AddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState("");

  const handleInputOnChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (inputData.length > 0) {
      handleTaskAddition(inputData);
    } else {
      toast("Insira algum texto para adicionar", {
        theme: "dark",
      });
    }

    setInputData("");
  };

  return (
    <styles.Container>
      <input
        type="text"
        className="add-task-input"
        onChange={handleInputOnChange}
        value={inputData}
        id="add-task"
      />

      <Button btnText="Adicionar" onClick={handleAddTaskClick} />

      <ToastContainer />
    </styles.Container>
  );
}
