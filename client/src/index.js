import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';
// import App from './App';
import Counter from './components/Counter';

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state = initialState, action) {
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

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
// <React.StrictMode>
// <Router>
//   <App />
// </Router>

// </React.StrictMode>
