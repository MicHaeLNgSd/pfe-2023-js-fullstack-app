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
