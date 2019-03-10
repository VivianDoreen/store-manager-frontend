import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const mainReducer = combineReducers({
  signin: loginReducer,
  signup: signupReducer,
});

export default mainReducer;
