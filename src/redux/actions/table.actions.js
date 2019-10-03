/*
 * action types
 */

export const LOAD_TABLE_RESULTS = "LOAD_TABLE_RESULTS";
export const LOAD_TABLE_RESULTS_SUCCESS = "LOAD_TABLE_RESULTS_SUCCESS";
export const LOAD_TABLE_RESULTS_ERROR = "LOAD_TABLE_RESULTS_ERROR";

/*
 * action creators
 */

export function loadTableResults() {
  return { type: LOAD_TABLE_RESULTS };
}

export function loadTableResultsSuccess(results) {
  return { type: LOAD_TABLE_RESULTS_SUCCESS, results };
}
