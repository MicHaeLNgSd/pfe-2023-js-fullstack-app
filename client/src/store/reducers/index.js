import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  chat: chatReducer,
});

export default rootReducer;
