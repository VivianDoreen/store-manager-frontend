import React from 'react';
import Loader from '../../Loader/Loader'

const LoginForm = (props) => {
  return(
  <div>
    <section>
      <div className="form-div">
        <h1>
          StoreManager
        </h1>
        <div className="login_form_title">
          Login
       <p>{ props.onLoading ?<Loader/> :''}</p>
        </div>
        <form onSubmit={props.FormSubmit} id="login-form" name="login-form">
          <div className="form-row">
            <div className="errorsLogin">
              <font color="red">
                <p>
                  {props.errors.message == 'Invalid username and password' ? props.errors.message : ''}
                </p>
              </font>
            </div>
            <label htmlFor="email">
              <i className="fas fa-envelope fa-1x" />
                &nbsp;Email
            </label>
            <br />
            <input className="input_email" id="email" name="email" type="email" onChange={props.changed} required />
            <label htmlFor="password">
              <i className="fas fa-unlock fa-1x" />
                &nbsp;Password
            </label>
            <input id="password" name="password" type="password" onChange={props.changed} required />
            <font color="red">
              {props.errors.message == 'Wrong password' ? props.errors.message : ''}
              {props.errors.Error ? 'Password must be atleast 5 characters' : ''}
            </font>
          </div>
          <div className="form-row-button">
          <button id="login_button" disabled={props.onLoading}>
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>

)};

export default LoginForm;
