import type from '../action/actionType/type';
  
  const initState = {
    success: false,
    data: {},
    errors: {}
  };
  
  function signupReducer(state = initState, action) {
    switch (action.type) {
      case type.signup_success:
        return {
          ...state,
          success: true,
          data: action.payload,
          errors: null
        };
      case type.signup_failure:
        return {
          ...state,
          errors: action.error,
          data: null
        };
      default:
        return state;
    }
  }
  
  export default signupReducer;
  