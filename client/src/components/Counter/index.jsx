import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from './../../store/actions/actionCreators';

function Counter({ count, step, increment, decrement, setStep }) {
  return (
    <div>
      <p>Current count is {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Current step is {step}</p>
      <button onClick={setStep}>Set step</button>
    </div>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(ActionCreators.incrementCreator()),
  decrement: () => dispatch(ActionCreators.decrementCreator()),
  setStep: ({ target: { value } }) => dispatch(ActionCreators.setStepCreator(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
