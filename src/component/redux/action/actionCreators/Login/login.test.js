import axios from 'axios';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './loginCreator';
import { fetchLoginSuccess, fetchLoginFailure } from './loginCreator';
import types from '../../actionType/type';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('create signin failure', () => {

  it('should create an unsuccessful create user login action', () => {

    const error = { error: 'username doesnot exist' };
    const expectedAction = {
      type: types.login_failure,
      error,
    };

    expect(actions.fetchLoginFailure(error)).toEqual(expectedAction);

  });

});

describe('login thunk actions', () => {

  const mockAdapter = new MockAdapter(axios);
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  const store = mockStore({ data: {} });

  beforeEach(() => {

    moxios.install();

  });

  afterEach(() => {

    moxios.uninstall();

  });

  it('should LOGIN_SUCCESFULLY', () => {

    moxios.stubRequest('https://b13challenge3.herokuapp.com/api/v1/auth/login', {
      status: 200,
      responseText: {
        user: {
          token: '123456trgeqgaf',
        },
      },
    });

    const expectedActions = [
      {
        type: types.login_success,
        payload: {
          user: {
            token: '123456trgeqgaf',
          },
        },
      },
    ];

    store
      .dispatch(
        actions.signinAction(
          {
            username: 'nabulo',
            password: 'password',
            email: 'nabulo@gmail.com',
          },
          'https://b13challenge3.herokuapp.com/api/v1/auth/login',
        ),
      )
      .then(() => {

        expect(store.getActions()).toEqual(expectedActions);

      });

  });

  it('should handle LOGIN_FAILURE', () => {

    moxios.stubRequest('https://b13challenge3.herokuapp.com/api/v1/auth/login', {
      status: 400,
      responseText: {
        error: {
          token: '123456trgeqgaf',
        },
      },
    });

    const expectedActions = [
      {
        type: types.login_failure,
        payload: {
          user: {
            token: '123456trgeqgaf',
          },
        },
      },
    ];
    store
      .dispatch(
        actions.signinAction(
          {
            username: 'nabulo',
            password: 'password',
            email: 'nabulodoreen@gmail.com',
          },
          'https://ah-backend-guardians-staging.herokuapp.com/api/users/login/',
        ),
      ).then(() => {

        expect(store.getActions()).toEqual(expectedActions);

      });

  });

});
