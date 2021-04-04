import { combineReducers } from "redux";

import taskReducer from "./Task/task.reducer";

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
