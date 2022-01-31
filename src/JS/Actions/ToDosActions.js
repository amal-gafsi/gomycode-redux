import {
  ADD_TODO,
  TASK_DONE,
  EDIT_TASK,
  FILTER_DONE,
  FILTER_UNDONE,
} from "../Constants/ActionsTypes";

export const add_todo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const task_done = (id) => {
  return {
    type: TASK_DONE,
    id,
  };
};

export const edit_task = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

export const filter_done = () => {
  return {
    type: FILTER_DONE,
  };
};

export const filter_undone = () => {
  return {
    type: FILTER_UNDONE,
  };
};
