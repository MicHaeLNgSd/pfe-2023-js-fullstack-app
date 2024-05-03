// створили перелічення (enum) для типів екшенів
// щоб використовувати його як джерело істини
// для редюсерів та екшенів
const ACTION_TYPES = {
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
  SET_STEP: 'counter/setStep',

  USER_REQUEST: 'user/userRequest',
  USER_SUCCESS: 'user/userSuccess',
  USER_ERROR: 'user/userError',
  LOGOUT: 'logout',
};

export default ACTION_TYPES;
