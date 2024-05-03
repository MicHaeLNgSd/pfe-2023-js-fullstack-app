import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from './../../store/actions/actionCreators';

function Counter({ count, step, increment, decrement, setStep }) {
  return (
    <div>
      <p>Current count is {count}</p>
      <div>
        <label>
          Current step:
          <input
            type='number'
            value={step}
            onChange={({ target: { value } }) => setStep(value)}
          />
        </label>
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = ({ counter }) => {
  return { ...counter };
};
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(ActionCreators.incrementCreator()),
  decrement: () => dispatch(ActionCreators.decrementCreator()),
  setStep: (value) => {
    console.log(value);
    dispatch(ActionCreators.setStepCreator(value));
  },
});

// const mapDispatchToProps = {
//   increment: ActionCreators.incrementCreator,
//   decrement: ActionCreators.decrementCreator,
//   changeStep: ActionCreators.setStepCreator,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
