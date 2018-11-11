import React, { Component } from 'react';

import './App.scss';
import { Header } from './components/Header/Header';
import MovieList from './components/MovieList';
import { MovieFiltering } from './components/MovieFiltering';
import { getMovie } from './utils/api';
import {MovieSlider}  from './components/MovieSlider';

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getMovie().then(response => {
      this.setState({ movies: response });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieSlider/>
          <div className="mainScreen">
            <MovieFiltering />
            <MovieList  className="movieList" movies={this.state.movies} />
          </div>
      </div>
    );
  }
}

export default App;
