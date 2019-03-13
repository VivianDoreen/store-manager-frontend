import axios from 'axios';
import type from '../../actionType/type';

const headers = {
  'Content-Type': 'application/json',
};

export const fetchLoginSuccess = payload => ({
  type: type.login_success,
  payload,
});

export const fetchLoginFailure = error => ({
  type: type.login_failure,
  error,
});

export const signinAction = userData => dispatch => (axios.post('https://b13challenge3.herokuapp.com/api/v1/auth/login', userData, { headers })
  .then((response) => {

    if (response.data['x-access-token']) {

      dispatch(fetchLoginSuccess(response.data));

    }

  }).catch((error) => {

    dispatch(fetchLoginFailure(error.response));

  })
);

export default signinAction;
