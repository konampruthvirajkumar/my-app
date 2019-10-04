/*
 * action types
 */

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_ERROR = "LOAD_USER_ERROR";

/*
 * action creators
 */

export function loadUser() {
  return { type: LOAD_USER };
}

export function loadUserSuccess(user) {
  return { type: LOAD_USER_SUCCESS, user };
}
