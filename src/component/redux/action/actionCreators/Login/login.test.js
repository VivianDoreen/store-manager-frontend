import types from '../../actionType/type'
// import configureMockStore from 'redux-mock-store'
// import mockAxios from 'axios'
// import thunk from 'redux-thunk'
import {fetchLoginSuccess, fetchLoginFailure} from '../../actionCreators/Login/loginCreator'
// import 'babel-polyfill';

// jest.mock('axios')

// describe('fetchLogin', () => {
//     it('should dispatch success action', async () => {
//         const middlewares = [thunk]
//         const mockStore = configureMockStore(middlewares)
//         const store = mockStore()

//         const mockUserData = { username: 'makabugo', password: 'fahad12345' }
//         const payload = { 
//                             "password":"fahad12345",
//                             "username":"makabugo"
//                          }

//         mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: payload }))

//         const expectedActions = [
//             { type: types.login_success, payload: payload },
//         ]

//         await store.dispatch(fetchLoginSuccess(mockUserData))

//         expect(store.getActions()).toEqual(expectedActions)
//         expect(mockAxios.post).toHaveBeenCalledTimes(1)
//     })

    // it('should dispatch failure action', async () => {
    //     const middlewares = [thunk]
    //     const mockStore = configureMockStore(middlewares)
    //     const store = mockStore()
    //     const mockUserData = { username: 'mutebile', password: 'BOUscandal' }
    //     const error = { 'errors': "Username and password do not match" }

    //     mockAxios.post.mockImplementationOnce(() => Promise.reject({ response: "Username and password do not match" }))

    //     const expectedActions = [
    //         { type: type.FETCH_AUTH_FAILURE, error: error.errors },
    //     ]

    //     await store.dispatch(fetchLogin(mockUserData))

    //     expect(store.getActions()).toEqual(expectedActions)
    // })
// })

// import type from '../../actionType/type'
import * as actions from "../../actionCreators/Login/loginCreator";
import axios from "axios";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// describe("Login actions", () => {
//   it("should handle USER_LOGGED_IN", () => {
//     const signUpData = {
//       user: {
//         password: "Nabulo@2018",
//         username: "nabulo",
//       },
//     };
        
//     const expectedAction = {
//       type: "LOGIN_SUCCESS",
//       payload: signUpData,
//     };
    
//     actions.type = "LOGIN_SUCCESS";
    
//     expect(
//       actions.fetchLoginSuccess({
//         user: { password: "Nabulo@2018", username: "nabulo" },
//       })
//     ).toEqual(expectedAction);
//   });
// });

// describe('create signin failure', () => {
//   it('should create an unsuccessful create user login action', () => {
//       const error = { error: 'username doesnot exist' };
//       const expectedAction = {
//           type: LOGIN_FAIL,
//           error: error,
//       };
      
//       expect(actions.fetchLoginFailure(error)).toEqual(expectedAction)
//   })
// })

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

  it("should LOGIN_SUCCESFULLY", () => {
    moxios.stubRequest('https://b13challenge3.herokuapp.com/api/v1/auth/login', {
      status: 200,
      responseText: {
        user: {
          token: "123456trgeqgaf",
        },
      },
    });

    const expectedActions = [
      {
        type: types.login_success,
        payload: {
          user: {
            token: "123456trgeqgaf",
          },
        },
      },
    ];

    store
      .dispatch(
        actions.signinAction(
          {
            username: "nabulo",
            password: "password",
            email: "nabulo@gmail.com",  
          },
          'https://b13challenge3.herokuapp.com/api/v1/auth/login'
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("should handle LOGIN_FAILURE", () => {
    moxios.stubRequest('https://b13challenge3.herokuapp.com/api/v1/auth/login', {
      status: 400,
      responseText: {
        error: {
          token: "123456trgeqgaf",
        },
      },
    });

    const expectedActions = [
      {
        type: types.login_failure,
        payload: {
          user: {
            token: "123456trgeqgaf"
          }
        }
      }
    ];
    store
      .dispatch(
        actions.signinAction(
          {
            username: "nabulo",
            password: "password",
            email: "nabulodoreen@gmail.com",
          },
          'https://ah-backend-guardians-staging.herokuapp.com/api/users/login/'
        )
      ).then(() => {      
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
