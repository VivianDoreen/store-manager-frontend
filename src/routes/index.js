import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from '../component/view/LoginView/LoginView';
import HomeView from '../component/view/Home/HomeView'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/home" component={HomeView} />
      <Route exact path="/" component={LoginView} />
    </div>
  </Router>

);

export default Routes;
