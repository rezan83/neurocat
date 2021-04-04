import React from "react";
import { connect } from "react-redux";
import { addTask, queryTask } from "../redux/Task/task.actions";
import { formStyle } from "../assets/styles/formStyle";

const TaskForm = ({ addTask, queryTask }) => {
  const [query, setQuery] = React.useState("");
  let addTaskHandler = (e) => {
    e.preventDefault();
    if (query) {
      let task = { content: query, done: false, id: Math.random() };
      addTask(task);
      queryTask("");
      setQuery("");
    }
  };

  let queryHandel = (e) => {
    e.preventDefault();
    queryTask(e.target.value);
    setQuery(e.target.value);
  };
  return (
    <div>
      <form style={formStyle.form}>
        <input
          style={formStyle.input}
          type="text"
          name=""
          placeholder="Search or Add a Task"
          id=""
          value={query}
          onChange={queryHandel}
        />
        <button style={formStyle.button} onClick={addTaskHandler}>
          +
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    queryTask: (query) => dispatch(queryTask(query)),
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
