import React from 'react';
import jj from '../../../css/main.css'
const LoginForm = (props) => {
  // console.log(props.data.message, "<=============, propsdata");
  // console.log(props.errors.message, "<=============, propserrors")
  // console.log(props.errors, "<=============, othererrors")
  const propErrors = props.errors.message;
  const propData = props.data.message;
  const propError = props.errors.Error;
  // Error
  

  return(
  <div>
       <section>
        <div className="form-div">
          <h1>StoreManager</h1>
          <div className="login_form_title">Login as Admin</div>
          <form onSubmit={props.FormSubmit} id="login-form" name = "login-form" >
              <div className='form-row'>
              {propErrors} {propData} {propError}
                  <label htmlFor ='email'><i className="fas fa-envelope fa-2x"></i>Email</label><br/>
                    <input className = 'input_email' id='email' name='email' type='email' onChange={props.changed}/>
              </div> 
              <div className='form-row'>
                <label htmlFor='password'><i className="fas fa-unlock fa-2x" ></i>Password</label>
                <input id='password' name='password' type='password' onChange={props.changed}/>
              </div>
              <div className='form-row-button'>
                    <button id="login_button" type="submit">Login</button>
              </div>
              <div className='form-row-forgot-password'> 
                    <div><a href="#" id="forgot_password">Forgot Password</a></div>
              </div>
              <div className='form-row'>
                    <div><a href="#" id="forgot_password">Don't have account, kindly contact Admin</a></div>
              </div>
          </form>
        </div>
       </section>
  </div>

);
}



  {/* <div className="row justify-content-center">
    <div className="col-md-4">
      <div className="form_outline">
        <form onSubmit={props.FormSubmit} id='login_form'>
          <input
            className="login_input"
            type="text"
            placeholder="Email..."
            id="email"
            name="email"
            onChange={props.changed}
          />
          <input
            className="login_input"
            type="password"
            placeholder="Password..."
            id="password"
            name="password"
            onChange={props.changed}
          />
          <button type="submit" className="form_button">
            Login
          </button>
        </form>
      </div>
    </div>
  </div> */}
// );

export default LoginForm;
