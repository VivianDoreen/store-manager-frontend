import React from 'react';
import Loader from '../../Loader/Loader';
import NavBar from '../NavBar/NavBar';


const LoginForm = (props) => {
  return(
  <div>
    <section>
      <NavBar/>
      <div className="form-div">
        <div className="login_form_title">
          Login
       <p className="loaderLogin">{ props.onLoading ?<Loader/> :''}</p>
        </div>
        <form onSubmit={props.FormSubmit} id="login-form" name="login-form">
          <div className="form-row">
            <div className="errorsLogin">
                <p>
                  {props.errors.message == 'Invalid username and password' ? props.errors.message : ''}
                </p>
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
              {props.errors.message == 'Wrong password' ? "wrong password or username" : ''}
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
