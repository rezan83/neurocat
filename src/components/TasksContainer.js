import React from "react";
import TaskGroup from "./TaskGroup";
import TaskForm from "./TaskForm";
import {tasksContainerStyle} from "../assets/styles/tasksContainerStyle";

const TasksContainer = () => {
  return (
    <div style={tasksContainerStyle}>
      <TaskForm />
      <TaskGroup />
    </div>
  );
};

export default TasksContainer;