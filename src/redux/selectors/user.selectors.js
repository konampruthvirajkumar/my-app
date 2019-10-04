import { createSelector } from 'reselect'
import { initialState } from '../reducers/reducers';
// selector
const selectGlobal = (state) => state.userReducer.user || initialState;
// reselect function
export const selectUser = createSelector(
  selectGlobal ,
  (user => user.data)
)