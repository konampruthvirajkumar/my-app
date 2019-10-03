import { LOAD_TABLE_RESULTS_SUCCESS } from "../actions/table.actions";

// The initial state of the App
export const initialState = {
    results: Object,
};

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TABLE_RESULTS_SUCCESS: {
      const newState = {
        ...state,
        results: action.results,
      };
      return newState;
    }
    default:
      return state;
  }
}

export default tableReducer;
