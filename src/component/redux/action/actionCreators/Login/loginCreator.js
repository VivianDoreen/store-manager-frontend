import type from '../../actionType/type';
import axios from 'axios'

var headers = {
  'Content-Type': 'application/json',
}

export const fetchLoginSuccess = payload => ({
  type: type.login_success,
  payload: payload,
});

export const fetchLoginFailure = error => ({
  type: type.login_failure,
  error,
});

export const signinAction = userData => (dispatch) => {
  return (axios.post('https://b13challenge3.herokuapp.com/api/v1/auth/login', userData, { headers:headers })
      .then((response) => {  
          console.log(response.data, "<................success");
          
        dispatch(fetchLoginSuccess(response.data))
        window.localStorage.setItem('x-access-token', response['x-access-token']) 
        // window.localStorage.setItem('username', response.data.user['username'])         
      })
      .catch((error) => {
          console.log(error.response.data.Error, "<............errors");
          dispatch(fetchLoginFailure(error.response))
      }))
    }

export default signinAction;