import React from 'react';
import '../../../css/main.css'

const LoginForm = (props) => {
  return(
  <div>
       <section>
        <div className="form-div">
          <h1>StoreManager</h1>
          <div className="login_form_title">Login as Admin</div>
          <form onSubmit={props.FormSubmit} id="login-form" name = "login-form" >

              <div className='form-row'>
              <div><font color="red">
              {props.errors.message ? "Wrong username or password": ''}
              {props.errors.Error ? "Password must be atleast 5 characters": ''}
              </font>
              </div>
                <label htmlFor ='email'><i className="fas fa-envelope fa-1x"></i>&nbsp;Email</label><br/>
                <input className = 'input_email' id='email' name='email' type='email' onChange={props.changed} required/>
                <label htmlFor='password'><i className="fas fa-unlock fa-1x" ></i>&nbsp;Password</label>
                <input id='password' name='password' type='password' onChange={props.changed} required/>
              </div> 
              <div className='form-row-button'>
                    <button id="login_button">Login</button>
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

export default LoginForm;
