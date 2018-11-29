import React, { Component } from 'react';
import styles from './App.scss';
import MovieList from './components/movieList/MovieList';
import { MovieFiltering } from './components/movieFiltering/MovieFiltering';
import { getMovie } from './utils/api';

class App extends Component {
  state = {
    activeFilters: {},
    movies: [],
  };

  componentDidMount() {
    getMovie().then(response => {
      this.setState({ movies: response });
    });
  }

  setActiveFilers({ type, value }) {
    this.setState({
      activeFilters: {
        ...this.state.activeFilters,
        [type]: value,
      },
    });
  }

  render() {
    const { activeFilters, movies } = this.state;
    const keys = Object.keys(activeFilters);
    const filteredMovie = movies.filter(movie =>
      keys.every(
        key => movie[key] === activeFilters[key] || activeFilters[key] === 'all'
      )
    );
    return (
      <div className="App">
        <div className="mainScreen">
          <MovieFiltering setActiveFilers={this.setActiveFilers.bind(this)} />
          <MovieList movies={filteredMovie} />
        </div>
      </div>
    );
  }
}

export default App;
