import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <nav>
      <Route exact path="/" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </nav>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
