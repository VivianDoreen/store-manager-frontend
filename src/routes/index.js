import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from '../component/view/LoginView/LoginView';

const Routes = () => (
  <div>
    <Router>
      <div>
        <Route path="/login" component={LoginView} />
      </div>
    </Router>
  </div>
);

export default Routes;
