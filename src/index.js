import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import MovieDetailComponent from './components/movieListItem/MovieDetailComponent';
import { Header } from './components/header/Header';
import { MovieSlider } from './components/movieSlider/MovieSlider';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <nav>
      <Header />
      <MovieSlider />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/items/:itemId" component={MovieDetailComponent} />
      </Switch>
    </nav>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
