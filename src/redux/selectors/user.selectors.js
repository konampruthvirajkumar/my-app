import { createSelector } from "reselect";
import { initialState } from "../reducers/reducers";
// selector
export const getUserReducer = state => state.userReducer || initialState;
// reselect function
export const getUser = createSelector(
  getUserReducer,
  user => user.user.data
);
