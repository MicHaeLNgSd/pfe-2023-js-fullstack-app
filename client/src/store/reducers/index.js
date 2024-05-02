const initialState = {
  count: 0,
  step: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment': {
      const newState = {
        ...state,
        count: state.count + state.step,
      };
      return newState;
    }
    case 'decrement': {
      const newState = {
        ...state,
        count: state.count - state.step,
      };
      return newState;
    }
    case 'setStep': {
      const newStep = { ...state, step: action.payload };
      return newStep;
    }
    default:
      return state;
  }
}

export default rootReducer;
