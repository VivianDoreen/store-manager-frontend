import React, { Component } from 'react';
import LoginForm from '../../presentational/Login/Login';

export class LoginView extends Component {

  state = {
    value: '',
    errors: {},
    data: '',
  };

  componentDidMount() {}

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
    });

  };

  handleFormSubmit = (e) => {

    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

  };

  render() {

    return (
      <div>
        <h1>
Store Manager
        </h1>
        <p id="welcome_text">
Store Manager is a web application that helps store owners manage sales and product inventory records.
        </p>
        <LoginForm
          changed={this.handleChange}
          FormSubmit={this.handleFormSubmit}
        />
      </div>
    );

  }

}
export default LoginView;
