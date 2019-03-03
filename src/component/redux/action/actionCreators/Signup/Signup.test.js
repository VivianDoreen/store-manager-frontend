import types from '../../actionType/type'
import * as actions from "../../actionCreators/Signup/signupCreator";
import axios from "axios";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('create signup failure', () => {
  it('should create an unsuccessful create user login action', () => {
      const error = { error: 'username doesnot exist' };
      const expectedAction = {
          type: types.signup_failure,
          error: error,
      };
      
      expect(actions.fetchSignupFailure(error)).toEqual(expectedAction)
  })
})

describe("login thunk actions", () => {
  let mockAdapter = new MockAdapter(axios);
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  const store = mockStore({ data: {} });

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should signup_SUCCESFULLY", () => {
    moxios.stubRequest('https://b13challenge3.herokuapp.com/api/v1/auth/signup', {
      status: 200,
      responseText: {
        user: {
          token: "123456trgeqgaf",
        },
      },
    });

    const expectedActions = [
      {
        type: types.signup_success,
        payload: {
          user: {
            token: "123456trgeqgaf",
          },
        },
      },
    ];

    store
      .dispatch(
        actions.signupAction(
          {
            username: "nabulo",
            password: "password",
            email: "nabulo@gmail.com",  
          },
          'https://b13challenge3.herokuapp.com/api/v1/auth/signup'
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("should handle SUGNUP_FAILURE", () => {
    moxios.stubRequest('https://b13challenge3.herokuapp.com/api/v1/auth/signup', {
      status: 400,
      responseText: {
        error: {
          token: "123456trgeqgaf",
        },
      },
    });

    const expectedActions = [
      {
        type: types.signup_success,
        payload: {
          user: {
            token: "123456trgeqgaf"
          }
        }
      }
    ];
    store
      .dispatch(
        actions.signupAction(
          {
            username: "nabulo",
            password: "password",
            email: "nabulodoreen@gmail.com",
          },
          'https://ah-backend-guardians-staging.herokuapp.com/api/users/signup/'
        )
      ).then(() => {      
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
