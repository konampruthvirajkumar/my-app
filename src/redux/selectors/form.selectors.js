import { createSelector } from "reselect";
import { initialState } from "../reducers/reducers";
// selector
export const getFormReducer = state => state.formReducer.playbook || initialState;
// reselect function
export const getSelectedPlayBook = createSelector(
  getFormReducer,
  playbook => playbook.playbook
);
