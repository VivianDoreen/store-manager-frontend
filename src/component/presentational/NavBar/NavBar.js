import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavLink from 'react-router-dom/NavLink';

export class NavBar extends Component {
    state={
        isAuthenticated:false,
    }
    componentWillMount(){
        const token = localStorage.getItem('token')
        if(token){
            this.setState({
                isAuthenticated:true
            })
        }

    }
    render() {
        return (
            <div id= "navbar">
                <h1 id="headerSM"> StoreManager</h1>
                <div id="navDiv">
                    <span>
                        <NavLink to='/' className="navLink">Home</NavLink>
                    </span>
                    {
                    this.state.isAuthenticated && (this.props.signin.data.role == 'admin') ?
                    <span>
                        <NavLink to='/signup' id='avatar' className="navLink">
                            Register
                        </NavLink>
                        <NavLink to='/login' className="navLink" onClick={() => localStorage.removeItem('token')}>
                                Logout
                        </NavLink>
                    </span>:
                    this.state.isAuthenticated && (this.props.signin.data.role == 'attendant') ?
                    <span>
                        <NavLink to='/' id='avatar' className="navLink">
                            Sales
                        </NavLink>
                        <NavLink to='/login' className="navLink" onClick={() => localStorage.removeItem('token')}>
                                Logout
                        </NavLink>
                    </span>:
                    <span>
                        <a href="/login" id="loginId">Login</a>
                    </span>
                    
                }
                </div>
            </div> 
        );
    }
}

export const MapStateToProps = state => {
    return state.navBarReducer 
};

export default connect(MapStateToProps)(NavBar);

