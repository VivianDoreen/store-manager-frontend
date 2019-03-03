import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from '../component/view/LoginView/LoginView';
import App from '../component/App'

const Routes = () => (
  <div>
    <Router>
      <div>
      <Route path="/app" component={App} />
        <Route path="/" component={LoginView} />
      </div>
    </Router>
  </div>
);

export default Routes;
