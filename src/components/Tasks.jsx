import React from "react";

import Task from "./Task";

import * as styles from "./css/Tasks.css";

export default function Tasks({ tasks, handleTaskClick, handleTextDeletion }) {
  return (
    <styles.Container>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTextDeletion={handleTextDeletion}
        />
      ))}
    </styles.Container>
  );
}
