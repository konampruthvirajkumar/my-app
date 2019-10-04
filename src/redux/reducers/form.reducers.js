import { CREATE_PREFLIGHT, SAVE_PLAYBOOK } from "../actions/form.actions";

// The initial state of the App
export const initialState = {
  values: Object,
  playbook: String
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PREFLIGHT: {
      const newState = {
        ...state,
        values: action
      };
      return newState;
    }
    case SAVE_PLAYBOOK: {
      const newState = {
        ...state,
        playbook: action
      };
      return newState;
    }
    default:
      return state;
  }
}

export default formReducer;
