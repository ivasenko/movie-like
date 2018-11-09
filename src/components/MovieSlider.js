import React, { Component } from 'react';
import MovieList from '../components/MovieList';
// import movieData from '../movieData.json';
import {getMovie} from "../utils/api";

export class MovieSlider extends Component {
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
      <div className="movieSlider">
        <MovieList className="divSlider" movies={this.state.movies} />
      </div>
    );
  }
}
