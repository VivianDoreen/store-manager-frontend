import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from '../reducers/mainReducer.js';

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
