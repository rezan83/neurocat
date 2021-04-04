import React from "react";
import TasksContainer from "./TasksContainer";
import { appStyle } from "../assets/styles/appStyle";


const App = (props) => {
  return (
    <div style={appStyle}>
      <h1>Neurocat</h1>
      <TasksContainer />
    </div>
  );
};

export default App;