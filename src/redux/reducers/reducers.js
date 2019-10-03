export const LOAD_REPOS = 'LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR ='LOAD_REPOS_ERROR';
// The initial state of the App
export const initialState = {};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        userData: {
          repositories: false
        }
      };

      return newState;
    }
    case LOAD_REPOS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        userData: {
          repositories: action.repos
        },
        currentUser: action.username
      };
      return newState;
    }

    case LOAD_REPOS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
