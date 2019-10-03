import { createSelector } from 'reselect'
import { initialState } from '../reducers/reducers';
// selector
const selectGlobal = (state) => state.tableReducer || initialState;
// reselect function
export const selectTableResults = createSelector(
  selectGlobal ,
  (results => results.results)
)