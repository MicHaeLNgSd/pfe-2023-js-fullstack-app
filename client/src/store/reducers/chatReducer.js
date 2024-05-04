import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  chat: null,
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_CHAT:
      return { ...state, chat: action.payload };
    default:
      return state;
  }
}

export default chatReducer;
