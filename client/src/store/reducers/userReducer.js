import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.USER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case ACTION_TYPES.USER_SUCCESS: {
      return { ...state, isLoading: false, user: action.payload };
    }
    case ACTION_TYPES.USER_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case ACTION_TYPES.LOGOUT: {
      return { ...initialState };
    }
    default:
      return state;
  }
}

export default userReducer;
