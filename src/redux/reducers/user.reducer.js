import { LOAD_USER_SUCCESS } from "../actions/user.actions";

// The initial state of the App
export const initialState = {
    user: Object,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_SUCCESS: {
      const newState = {
        ...state,
        user: action.user,
      };
      return newState;
    }
    default:
      return state;
  }
}

export default userReducer;
