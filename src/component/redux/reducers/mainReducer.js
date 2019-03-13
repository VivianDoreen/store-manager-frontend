import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import navBarReducer from './navBarReducer';

const mainReducer = combineReducers({
  signin: loginReducer,
  signup: signupReducer,
  navBarReducer,

});

export default mainReducer;
