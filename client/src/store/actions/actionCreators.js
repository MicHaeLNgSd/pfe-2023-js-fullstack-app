import ACTION_TYPES from './actionTypes';

export const incrementCreator = () => ({ type: ACTION_TYPES.INCREMENT });
export const decrementCreator = () => ({ type: ACTION_TYPES.DECREMENT });
export const setStepCreator = (value) => ({
  type: ACTION_TYPES.SET_STEP,
  payload: value,
});
