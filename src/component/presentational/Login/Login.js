import React from 'react';

const LoginForm = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <div className='form_outline'>
          <form>
            <input
              className='login_input'
              type='text'
              placeholder='Email...'
              id='email'
              name='email'
            />
            <input
              className='login_input'
              type='password'
              placeholder='Password...'
              id='password'
              name='password'
            />
            <button type="submit" className="form_button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
