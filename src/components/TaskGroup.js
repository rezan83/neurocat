import React from "react";
import { connect } from "react-redux";
import { removeTask, doneTask } from "../redux/Task/task.actions";
import Task from "./Task";
import { containerChild } from "../assets/styles/containerChild";
import {
  taskDoneColor,
  buttonDoneColor,
  noTaskFoundColor,
} from "../assets/styles/colors";


const TaskGroup = ({ tasks, removeTask, query, doneTask }) => {
  const noTaskFoundMessage = { content: "No Tasks found", id: 1 };
  const NoTaskFound = () => (
    <Task style={{ color: noTaskFoundColor }} task={noTaskFoundMessage} />
  );
  let allTasks = [...tasks];
  let TaskList = [];
  if (query) {
    allTasks = allTasks.filter((task) => task.content.match(query));
  }
  TaskList = allTasks.map((task) => {
    return (
      <div style={containerChild.child} key={task.id}>
        <button
          style={{ ...containerChild.button, backgroundColor: buttonDoneColor }}
          onClick={() => doneTask(task.id)}
        >
          {(task.done && "✓") || "○"}
        </button>

        <Task task={task} style={task.done && { color: taskDoneColor }} />

        <button
          style={containerChild.button}
          onClick={() => removeTask(task.id)}
        >
          X
        </button>
      </div>
    );
  });
  return <div>{(TaskList.length && TaskList) || <NoTaskFound />}</div>;
};

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
    query: state.task.query,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (id) => dispatch(removeTask(id)),
    doneTask: (id) => dispatch(doneTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskGroup);
