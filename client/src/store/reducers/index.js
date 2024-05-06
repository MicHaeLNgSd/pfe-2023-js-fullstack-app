import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  chats: chatReducer,
});

export default rootReducer;
