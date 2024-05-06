import ACTION_TYPES from './actionTypes';

export const incrementCreator = () => ({ type: ACTION_TYPES.INCREMENT });
export const decrementCreator = () => ({ type: ACTION_TYPES.DECREMENT });
export const setStepCreator = (value) => ({
  type: ACTION_TYPES.SET_STEP,
  payload: value,
});

export const userRequestCreator = () => ({ type: ACTION_TYPES.USER_REQUEST });
export const userSuccessCreator = (value) => ({
  type: ACTION_TYPES.USER_SUCCESS,
  payload: value,
});
export const userErrorCreator = (value) => ({
  type: ACTION_TYPES.USER_ERROR,
  payload: value,
});
export const logoutCreator = () => ({ type: ACTION_TYPES.LOGOUT });

export const chatRequestCreator = () => ({ type: ACTION_TYPES.CHAT_REQUEST });
export const chatSuccessCreator = (value) => ({
  type: ACTION_TYPES.CHAT_SUCCESS,
  payload: value,
});
export const chatErrorCreator = (value) => ({
  type: ACTION_TYPES.CHAT_ERROR,
  payload: value,
});
export const setChatsCreator = (value) => ({
  type: ACTION_TYPES.SET_CHATS,
  payload: value,
});
export const setActiveChatCreator = (value) => ({
  type: ACTION_TYPES.SET_ACTIVE_CHAT,
  payload: value,
});
