import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import Loader from '../../Loader/LoaderSignup'

const SignupForm = props => (
  <div>
    <section>
      <h1 className="headingTwo">
        StoreManager
      </h1>
      <NavLink className="navlink" to="/" onClick={() => localStorage.removeItem('token')}>
                  Logout
      </NavLink>
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
        <p>{ props.onLoading ?<Loader/> :''}</p>
          <div id="general_add">
            <h2>
              Register Store Attendant
            </h2>
          </div>
          <form onSubmit={props.FormSubmit} id="user-form" name="pdt-form">
            <p className="success-respose">
              {props.data ? 'Store attendant successfully registered' : ''}
            </p>
            <p className="success-respose">
              {props.errors.message ? props.errors.message : ''}
            </p>
            <div className="form-row2" id="message" />
              <div className="form-row2">
                <label htmlFor="name">
                  Name:
                </label>
                <input id="name" name="name" type="text" onChange={props.changed} />
              </div>
            <div className="form-row2">
              <label htmlFor="email">
                Email:
              </label>
              <input id="email" name="email" type="email" onChange={props.changed} />
            </div>
            <div className="form-row2">
              <label htmlFor="password">
                password:
              </label>
              <input id="password" name="password" type="password" onChange={props.changed} />
            </div>
            <div className="form-row2">
              <label htmlFor="confirm_password">
                Confirm password:
              </label>
              <input id="confirm_password" name="confirm_password" type="password" onChange={props.changed} />
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
