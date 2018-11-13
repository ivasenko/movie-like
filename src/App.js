import React, { Component } from 'react';

import styles from './App.scss';
import { Header } from './components/header/Header';
import MovieList from './components/movieList/MovieList';
import { MovieFiltering } from './components/movieFiltering/MovieFiltering';
import { getMovie } from './utils/api';
import { MovieSlider } from './components/movieSlider/MovieSlider';

class App extends Component {
  state = {
    activeFilters: [],
    movies: [],
  };

  componentDidMount() {
    getMovie().then(response => {
      this.setState({ movies: response });
    });
  }

  setActiveFilers(activeFilters) {
    this.setState({ activeFilters: [activeFilters] });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieSlider />
        <div className="mainScreen">
          <MovieFiltering setActiveFilers={this.setActiveFilers.bind(this)} />
          <MovieList
            activeFilters={this.state.activeFilters}
            movies={this.state.movies}
          />
        </div>
      </div>
    );
  }
}

export default App;
