// створили перелічення (enum) для типів екшенів
// щоб використовувати його як джерело істини
// для редюсерів та екшенів
const ACTION_TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  SET_STEP: 'setStep',
};

export default ACTION_TYPES;
