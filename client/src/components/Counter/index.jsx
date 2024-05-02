import React from 'react';
import { connect } from 'react-redux';

function Counter({ count, step, dispatch }) {
  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const setStep = () => {
    const newStep = Number(prompt('Write down your new step'));
    dispatch({ type: 'setStep', payload: newStep });
  };

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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Counter);
