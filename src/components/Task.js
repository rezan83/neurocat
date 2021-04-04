import React from "react";
import { taskStyle } from "../assets/styles/taskStyle";

const Task = ({ task, style }) => {
  return (
    <>
      <h3 style={{ ...taskStyle, ...style }}>{task.content}</h3>
    </>
  );
};

export default Task;
