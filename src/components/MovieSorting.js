import React, { Component } from 'react';
import movieData from '../movieData';
import { Filter } from './Filter';

const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const movie_categories = movieData
  .map(film => film.country)
  .filter(uniqueItems);

movie_categories.push('all');
movie_categories.sort();

const movieSorting = {
  type: [
    {
      id: 1,
      name: 'comedy',
    },
    {
      id: 2,
      name: 'drama',
    },
    {
      id: 3,
      name: 'thriller',
    },
  ],
  country: [
    {
      id: 1,
      name: 'usa',
    },
    {
      id: 2,
      name: 'germany',
    },
    {
      id: 3,
      name: 'france',
    },
  ],
  year: [
    {
      id: 1,
      name: '2018',
    },
    {
      id: 2,
      name: '2000',
    },
    {
      id: 3,
      name: '1990',
    },
  ],
};

function searchFor(term) {
  return function(x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export class MovieSorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieSorting: movieSorting,
      term: '',
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { movieSorting, term } = this.state;
    return (
      <div className="movieSorting">
        <h1>MovieSorting</h1>
        <div className="movie-sorting">
          <form>
            <input type="text" onChange={this.searchHandler} value={term} />
          </form>
          <h3 style={{ fontWeight: 'bold' }}>Type</h3>
          {movieSorting.type.filter(searchFor(term)).map(type => (
            <div key={type.id}>{type.name}</div>
          ))}
          <h3 style={{ fontWeight: 'bold' }}>Country</h3>
          {movieSorting.country.filter(searchFor(term)).map(country => (
            <div key={country.id}>{country.name}</div>
          ))}
          <h3 style={{ fontWeight: 'bold' }}>Year</h3>
          {movieSorting.year.filter(searchFor(term)).map(year => (
            <div key={year.id}>{year.name}</div>
          ))}
        </div>

        <Filter films={movieData} />
      </div>
    );
  }
}
