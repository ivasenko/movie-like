import React, { Component } from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import MovieList from './components/MovieList';
import { MovieSlider } from './components/MovieSlider';
import { MovieSorting } from './components/MovieSorting';
import { getMovie } from './utils/api';

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
        <MovieSlider />
        <div className="mainScreen">
          <MovieSorting />
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
