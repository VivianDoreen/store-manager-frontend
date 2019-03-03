import { combineReducers } from 'redux';
import loginReducer from './loginReducer'

const mainReducer = combineReducers({
    signin:loginReducer,
});

export default mainReducer;
