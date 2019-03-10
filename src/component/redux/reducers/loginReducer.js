import type from '../action/actionType/type';

const initState = {
  success: false,
  data: {},
  errors: {},
};

function loginReducer(state = initState, action) {

  switch (action.type) {

  case type.login_success:
    return {
      ...state,
      success: true,
      data: action.payload,
      errors: null,
    };
  case type.login_failure:
    return {
      ...state,
      errors: action.error,
      success: false,
      data: null,
    };
  default:
    return state;

  }

}

export default loginReducer;
