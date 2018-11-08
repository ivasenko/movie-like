import React, { Component } from 'react';
import movieData from '../movieData';
import { Filter } from './Filter';

const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const movie_categories = movieData
  .map(film => film.country)
  .filter(uniqueItems);

movie_categories.push('all');
movie_categories.sort();

export class MovieFiltering extends Component {
  render() {
    return (
      <div className="movieSorting">
        <h1>MovieFiltering</h1>
        <Filter films={movieData} />
      </div>
    );
  }
}
