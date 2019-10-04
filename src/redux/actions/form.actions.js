/*
 * action types
 */

export const CREATE_PREFLIGHT = "CREATE_PREFLIGHT";
export const CREATE_PREFLIGHT_SUCCESS = "CREATE_PREFLIGHT_SUCCESS";
export const CREATE_PREFLIGHT_ERROR = "CREATE_PREFLIGHT_ERROR";
export const SAVE_PLAYBOOK = "SAVE_PLAYBOOK";

/*
 * action creators
 */

export function createPreFlight(values) {
  return { type: CREATE_PREFLIGHT, values };
}

export function loadTableResultsSuccess(results) {
  return { type: CREATE_PREFLIGHT_SUCCESS, results };
}

export function savePlayBook(playbook) {
  return { type: SAVE_PLAYBOOK, playbook };
}
