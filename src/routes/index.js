import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from '../component/view/LoginView/LoginView';
import HomeView from '../component/view/Home/HomeView';
import App from '../component/view/LandingPage/App';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={HomeView} />
      <Route exact path="/login" component={LoginView} />
    </div>
  </Router>

);

export default Routes;
