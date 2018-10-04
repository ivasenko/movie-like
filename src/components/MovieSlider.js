import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import JSON from '../db.json';


export class MovieSlider extends Component {
  state = {
    movies: JSON
  }
    render() {
      return (
          <div className="movieSlider"  >
            <MovieList className="divSlider" movies={this.state.movies} />
          </div>
      );
    }
}