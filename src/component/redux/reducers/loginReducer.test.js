import { createStore } from 'redux';
import LoginReducer from './loginReducer';
import types from '../action/actionType/type';
import mainReducer from './mainReducer';

const initialState = {
  data: {},
  errors: {},
  success: false,
};

describe('Testing reducer', () => {

  it('Test empty reducer', () => {

    expect(LoginReducer(undefined, {})).toEqual(initialState);

  });

  it('Test success reducer', () => {

    const response = LoginReducer(initialState, {
      type: types.login_success,
      payload: {
        user: {
          email: 'vivian.nabulo@gmail.com',
          username: 'nabulo',
        },
      },
    });

    expect(response).toEqual({
      data: {
        user: {
          email: 'vivian.nabulo@gmail.com',
          username: 'nabulo',
        },
      },
      errors: null,
      success: true,
    });

  });

  it('Test failure reducer', () => {

    const response = LoginReducer(initialState, {
      type: types.login_failure,
      payload: {
        user: {
          email: '',
          username: '',
        },
      },
    });

    expect(response).toEqual({
      data: null,
      errors: undefined,
      success: false,
    });

  });

  it('Test main reducer', () => {

    const store = createStore(mainReducer);
    expect(store.getState().signin.data).toEqual({});

  });

});
