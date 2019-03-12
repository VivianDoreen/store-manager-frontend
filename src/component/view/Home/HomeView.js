import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../../presentational/Home/Home';
import signupAction from '../../redux/action/actionCreators/Signup/signupCreator';
import '../../../css/signup.css';


export class HomeView extends Component {

  state = {
    value: '',
    errors: '',
    data: '',
    loading:false,
  };

  componentWillMount(){
   const token = localStorage.getItem('token');
   if(!token){
     this.props.history.push('/login')
   }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

  };

  componentWillReceiveProps(nextProps) {

    const { data, errors } = nextProps;

    if (errors) {
      this.setState({ errors: errors.data, loading:false });
      this.setState({ data: ''});

    } else if (data) {
      this.setState({ errors: ''});
      this.setState({ data, loading:false });
      this.props.history.push('/')
    }
  }

  handleFormSubmit = (e) => {

    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
      role: this.state.role,
    };
    this.props.signupAction(data);
    this.setState({loading:true})
  };

  render() {
    const {loading}=this.state;
        return (
      <body className="landing-page">
        <div>
        <SignupForm
          changed={this.handleChange}
          FormSubmit={this.handleFormSubmit}
          errors={this.state.errors}
          data={this.state.data}
          onLoading={loading}
        />
        </div>
      </body>
    );

  }

}

export const mapStateToProps = state => ({
  data: state.signup.data,
  errors: state.signup.errors,
});

export default connect(
  mapStateToProps,
  { signupAction },
)(HomeView);
