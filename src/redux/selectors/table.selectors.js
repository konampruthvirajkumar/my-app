import { createSelector } from "reselect";
import { initialState } from "../reducers/reducers";
// selector
export const selectTableReducer = state => state.tableReducer || initialState;
// reselect function
export const selectTableResults = createSelector(
  selectTableReducer,
  results => results.results
);
