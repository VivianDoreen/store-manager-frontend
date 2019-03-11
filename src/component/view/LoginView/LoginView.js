import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../presentational/Login/Login';
import signinAction from '../../redux/action/actionCreators/Login/loginCreator';
import '../../../css/main.css';
import { toast,ToastContainer} from 'react-toastify';

// import Loader from '../../Loader/Loader'

export class LoginView extends Component {
  state = {
    value: '',
    errors: {},
    data: '',
    loading:false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillReceiveProps(nextProps) {
    const { data, errors } = nextProps;
    if (errors) {
      console.log(errors, "Manyerrors");
      
      this.setState({ 
        errors: errors.data, 
        loading:false,
      });

    } else if (data) {

      this.setState({ 
        data, 
        loading:false,
      });
        localStorage.setItem('token',data)
  
        nextProps.history.push('/home')
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signinAction(data);
    this.setState({loading:true})
  };

  render() {
    const {loading}=this.state;
    const {deactivateButton}=this.state
    return (
      <div>
        <LoginForm
          changed={this.handleChange}
          FormSubmit={this.handleFormSubmit}
          errors={this.state.errors}
          onLoading={loading}
        />
      </div>
    );

  }

}

export const mapStateToProps = state => ({
  data: state.signin.data,
  errors: state.signin.errors,
});

export default connect(
  mapStateToProps,
  { signinAction },
)(LoginView);
