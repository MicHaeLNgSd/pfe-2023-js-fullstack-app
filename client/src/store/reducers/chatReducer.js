import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  chats: [],
  isLoading: false,
  error: null,
  activeChat: null,
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CHAT_REQUEST:
      return { ...state, isLoading: true };
    case ACTION_TYPES.CHAT_SUCCESS:
      return { ...state, isLoading: false, chats: action.payload };
    case ACTION_TYPES.CHAT_ERROR:
      return { ...state, error: action.payload };
    case ACTION_TYPES.SET_CHATS:
      return { ...state, chats: action.payload };
    case ACTION_TYPES.SET_ACTIVE_CHAT:
      return { ...state, activeChat: action.payload };
    default:
      return state;
  }
}

export default chatReducer;
