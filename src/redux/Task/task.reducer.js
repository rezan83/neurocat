import { ADD, REMOVE, QUERY, EDIT, DONE } from "./task.types";

const INITIAL_STATE = {
  tasks: [
    { content: "first", done: false, id: Math.random() },
    { content: "second", done: true, id: Math.random() },

    { content: "third", done: false, id: Math.random() },
  ],
  query: "",
  edit: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case DONE:
      let newTasks = [...state.tasks];
      for (const task of newTasks) {
        if (task.id === action.payload) {
          task.done = !task.done;
          break;
        }
      }

      return {
        ...state,
        tasks: newTasks,
      };
    case EDIT:
      console.log(action.payload);
      return {
        ...state,
        edit: action.payload,
      };
    case QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
