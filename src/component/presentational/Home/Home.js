import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import Loader from '../../Loader/Loader';
import NavBar from '../NavBar/NavBar';


const SignupForm = props => (
  <div>
    <section>
      <NavBar/>
      <article>
        <div id="system_info">
          <time>
            <strong>
              Date:
            </strong>
              02/12/018
          </time>
        </div>
        <div id="general_form">
        <p className="pLoader">{ props.onLoading ?<Loader/> :''}</p>
          <div id="general_add">
            <h2>
              Register Store Attendant
            </h2>
          </div>
          <form onSubmit={props.FormSubmit} id="user-form" name="pdt-form">
            <p className="success-respose-register">
              {props.data ? 'Store attendant successfully registered' : ''}
            </p>
            
            <p className="success-respose">
            <font color='red'>
              {props.errors.message == 'All fields are required'? props.errors.message: ''}
            </font>
            </p>
            <div className="form-row2" id="message" />
              <div className="form-row2">
                <label htmlFor="name">
                  Name:
                </label>
                <input id="name" name="name" type="text" onChange={props.changed} />
                <font color="red">{props.errors.message == 'name is required'? props.errors.message: ''}</font>
                  
              </div>
            <div className="form-row2">
              <label htmlFor="email">
                
                Email:
              </label>
              <input id="email" name="email" type="email" onChange={props.changed} />
              <font color='red'>
                    {props.errors.message == 'Email already exists' ? props.errors.message : ''}
                    {props.errors.message == 'email is required'? props.errors.message: ''}
                  </font>
            </div>
            
            <div className="form-row2">
              <label htmlFor="password">
                password:
              </label>
              <input id="password" name="password" type="password" onChange={props.changed} />
              <font color="red">
              {props.errors.message == 'password must be atleast 5 characters'? props.errors.message: ''}
              {props.errors.message == 'password is required'? props.errors.message: ''}
              </font>
            </div>
            <div className="form-row2">
              <label htmlFor="confirm_password">
                Confirm password:
              </label>
             <input id="confirm_password" name="confirm_password" type="password" onChange={props.changed} />
             <font color='red'>{props.errors.message == 'Passwords do not match' ? props.errors.message : ''}</font>
            </div>
            <div className="form-row2">
              <label className="labelRole" htmlFor="role">
                Role:
              </label>
              <select id="role" onChange={props.changed} name="role">
                <option className="role" value="#">
                  Select Role
                </option>
                <option className="role" value="attendant" >
                  Store attendant
                </option>
                <option className="role" value="admin" >
                  admin
                </option>
              </select>
              <font color="red">{props.errors.message == 'role must begin with a letter'? "role required": ''}</font>
            </div>
            <div className="form-row2-button">
              <button id= "button2" disabled={props.onLoading}>
                <font color="white">
                  Register
                </font>
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  </div>
);

export default SignupForm;
