import { legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

// const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(rootReducer);

export default store;
