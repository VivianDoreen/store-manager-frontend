import { createStore } from 'redux';
import SignupReducer from './signupReducer';
import types from '../action/actionType/type';
import mainReducer from './mainReducer';

const initialState = {
  data: {},
  errors: {},
  success: false,
};

describe('Testing reducer', () => {

  it('Test empty reducer', () => {

    expect(SignupReducer(undefined, {})).toEqual(initialState);

  });

  it('Test success reducer', () => {

    const response = SignupReducer(initialState, {
      type: types.signup_success,
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

    const response = SignupReducer(initialState, {
      type: types.signup_failure,
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
    expect(store.getState().signup.data).toEqual({});

  });

});
