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
      .then(response=>{
          if(response.data["x-access-token"]){
            dispatch(fetchLoginSuccess(response.data["x-access-token"]))
            window.localStorage.setItem('token', response.data['x-access-token']) 
          }
      }  
      ) .catch((error) => {
        dispatch(fetchLoginFailure(error.response))
    })
  )}

export default signinAction;