import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  count: 0,
  step: 1,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return { ...state, count: state.count + state.step };
    }
    case ACTION_TYPES.DECREMENT: {
      return { ...state, count: state.count - state.step };
    }
    case ACTION_TYPES.SET_STEP: {
      return { ...state, step: Number(action.payload) };
    }
    default:
      return state;
  }
}

export default counterReducer;
