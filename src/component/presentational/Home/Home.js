import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import '../../../css/signup.css'

const SignupForm = (props) => {
  return(
  <div>
       <section>
       <h1 className = "headingTwo">StoreManager</h1>
        <NavLink className = "navlink" to='/' onClick={() => localStorage.removeItem('x-access-token')}>
                  Logout
        </NavLink>
        <article>
            <div id="system_info">
                <time><strong>Date: </strong>02/12/018</time>
            </div>
            <div id="general_form">
                <div id="general_add"><h2> Register Store Attendant</h2></div>
                <form onSubmit={props.FormSubmit} id="user-form" name = "pdt-form">
                    <p className="success-respose">{props.data?"Store attendant successfully registered":''}</p>
                    <p className="success-respose">{props.errors.message? props.errors.message :''}</p>
                    <div className='form-row' id="message"></div>
                    <div className='form-row'>
                        <label htmlFor='name'>Name:</label>
                        <input id='name' name='name' type='text' onChange={props.changed}/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' name='email' type='email' onChange={props.changed}/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='password'>password:</label>
                        <input id='password' name='password' type='password' onChange={props.changed}/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='confirm_password'>Confirm password:</label>
                        <input id='confirm_password' name='confirm_password' type='password' onChange={props.changed}/>
                    </div>
                    <div className='form-row'>
                        <label className = "labelRole" htmlFor='role' >Role:</label>
                        <select  id="role" onChange={props.changed} name="role">
                            <option className="role" value="attendant" onChange={props.changed}>Store attendant </option>
                            <option className="role" value="admin" onChange={props.changed}>admin</option>
                        </select>
                    </div> 
                    <div className='form-row-button'>
                        <button><font color="white">Register</font></button>
                    </div>
                </form>
            </div>
        </article>
{/*         
        <div className="form-div">
          
          <div className="login_form_title">Login as Admin</div>
          <form onSubmit={props.FormSubmit} id="login-form" name = "login-form" >

              <div className='form-row'>
                <label htmlFor ='email'><i className="fas fa-envelope fa-1x"></i>&nbsp;FullName</label><br/>
                <input className = 'input_email' id='fullName' name='email' type='text' required/>
                <label htmlFor ='email'><i className="fas fa-envelope fa-1x"></i>&nbsp;Email</label><br/>
                <input className = 'input_email' id='email' name='email' type='email' required/>
                <label htmlFor='password'><i className="fas fa-unlock fa-1x" ></i>&nbsp;Password</label>
                <input id='password' name='password' type='password' onChange={props.changed} required/>
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
        </div> */}
       </section>
  </div>

);
}

export default SignupForm;
