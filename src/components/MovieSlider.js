import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import movieData from '../movieData.json';

export class MovieSlider extends Component {
  state = {
    movies: movieData,
  };
  render() {
    return (
      <div className="movieSlider">
        <MovieList className="divSlider" movies={this.state.movies} />
      </div>
    );
  }
}
