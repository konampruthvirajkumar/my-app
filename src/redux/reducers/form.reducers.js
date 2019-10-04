import { CREATE_PREFLIGHT } from "../actions/form.actions";

// The initial state of the App
export const initialState = {
    values: Object,
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PREFLIGHT: {
      const newState = {
        ...state,
        values: action,
      };
      return newState;
    }
    default:
      return state;
  }
}

export default formReducer;
