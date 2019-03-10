import axios from 'axios';
import type from '../../actionType/type';


const token = window.localStorage.getItem('x-access-token');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export const fetchSignupSuccess = payload => ({
  type: type.signup_success,
  payload,
});

export const fetchSignupFailure = error => ({
  type: type.signup_failure,
  error,
});

export const signupAction = userData => dispatch => (axios.post('https://b13challenge3.herokuapp.com/api/v1/auth/signup', userData, { headers })
  .then((response) => {

    console.log(response, '--------->response for logout');
    // if(response.data["x-access-token"]){
    dispatch(fetchSignupSuccess(response));
    // }

  }).catch((error) => {

    console.log(error.response, '<<<..................errors');

    dispatch(fetchSignupFailure(error.response));

  })
);

export default signupAction;
