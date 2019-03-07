import React, { Component } from 'react';
import SignupForm from '../../presentational/Home/Home';
import { connect } from 'react-redux';
import signupAction from '../../redux/action/actionCreators/Signup/signupCreator'

export class HomeView extends Component {

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
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      name:this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirm_password:this.state.confirm_password,
      role:this.state.role,
    }; 
       
    this.props.signupAction(data)
  };

  render() {

    return (
      <div>
        <SignupForm 
          changed={this.handleChange}
          FormSubmit={this.handleFormSubmit}
          errors={this.state.errors}
          data={this.state.data}
        />
      </div>
    );

  }

}

export const mapStateToProps = (state) => {
  return {
    data: state.signup.data,
    errors: state.signup.errors,
  };
};

export default connect(
    mapStateToProps,
    { signupAction }
  )(HomeView);