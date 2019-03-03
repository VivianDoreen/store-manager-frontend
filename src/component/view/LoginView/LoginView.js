import React, { Component } from 'react';
import LoginForm from '../../presentational/Login/Login';
import { connect } from 'react-redux';
import signinAction from '../../redux/action/actionCreators/Login/loginCreator'

export class LoginView extends Component {
  state = {
    value: '',
    errors: {},
    data: '',
  };

  handleChange = (e) => {    
    this.setState({
      [e.target.name]: e.target.value,
    });

  };

  componentWillReceiveProps(nextProps) {    
    const { data, errors } = nextProps;

    if (errors) {   
      this.setState({ errors: errors.data});
    } else if (data) {
      this.setState({ data: data});
      this.props.history.push('/home');  
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };    
    this.props.signinAction(data)
  };

  render() {

    return (
      <div>
        <LoginForm
          changed={this.handleChange}
          FormSubmit={this.handleFormSubmit}
          errors={this.state.errors}
        />
      </div>
    );

  }

}

export const mapStateToProps = (state) => {
  return {
    data: state.signin.data,
    errors: state.signin.errors,
  };
};

export default connect(
  mapStateToProps,
  { signinAction }
)(LoginView);
