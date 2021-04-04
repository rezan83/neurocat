import { ADD, REMOVE, QUERY, EDIT,DONE } from "./task.types";

export const addTask = (content) => {
  return {
    type: ADD,
    payload: content,
  };
};
export const removeTask = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
export const queryTask = (query) => {
  return {
    type: QUERY,
    payload: query,
  };
};

export const editTask = (id) => {
  return {
    type: EDIT,
    payload: id,
  };
};
export const doneTask = (id) => {
  return {
    type: DONE,
    payload: id,
  };
};
