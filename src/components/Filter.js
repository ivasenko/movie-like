import React, { Component } from 'react';
import movieData from '../movieData';
// import {Search} from "./Search";

const MovieItem = ({ country, title, img, year }) => (
  <div className="country__list-item box flex-spread">
    {title}, {country}, {year}
    <img style={{ width: '300px', height: '300px' }} src={img} alt="{img}" />
    <div className={`country--${country} circle`} />
  </div>
);

const MovieItems = ({ state: { movies, displayCountry } }) => (
  <div>
    {movies
      .filter(
        ({ country }) => displayCountry === country || displayCountry === 'all'
      )
      .map(({ country, title, img, year }) => (
        <MovieItem
          key={`MovieItems-${title}`}
          country={country}
          title={title}
          img={img}
          year={year}
        />
      ))}
  </div>
);

const MovieItemsByYear = ({ state: { movies, displayMovieByYear } }) => (
  <div>
    {movies
      .filter(
        ({ year }) =>
          displayMovieByYear === year || displayMovieByYear === 'all'
      )
      .map(({ country, title, img, year }) => (
        <MovieItem
          key={`MovieItems-${title}`}
          country={country}
          year={year}
          title={title}
          img={img}
        />
      ))}
  </div>
);

const ButtonCategories = (movieCategories, setCountry) =>
  movieCategories.map(country => (
    <button
      key={country}
      className={`btn-${country}`}
      onClick={() => setCountry(country)}
    >
      {country}
    </button>
  ));
const ButtonCategoriesByYear = (movieCategoriesByYear, setMovieByYear) =>
  movieCategoriesByYear.map(year => (
    <button
      key={year}
      className={`btn-${year}`}
      onClick={() => setMovieByYear(year)}
    >
      {year}
    </button>
  ));
const UI = ({
  state,
  state: { movieCategories, movieCategoriesByYear },
  setCountry,
  setMovieByYear,
  allMovies,
}) => (
  <div className="box flex-row">
    <div className="box flex-col">
      <h3>Filter by Country</h3>
      {ButtonCategories(movieCategories, setCountry)}
    </div>
    <div className="box flex-col">
      <h3>Results</h3>
      <MovieItems state={state} />
    </div>
    <div className="box flex-col">
      <h3>Filter by Year</h3>
      {ButtonCategoriesByYear(movieCategoriesByYear, setMovieByYear)}
    </div>
    <div className="box flex-col">
      <h3>Results</h3>
      <MovieItemsByYear state={state} />
    </div>
  </div>
);

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCountry: 'all',
      movies: movieData,
      movieCategories: movie_category,

      displayMovieByYear: 'all',
      movieCategoriesByYear: movie_category_by_year,
    };
    this.setCountry = this.setCountry.bind(this);
    this.setMovieByYear = this.setMovieByYear.bind(this);
  }
  setCountry(country) {
    this.setState({
      displayCountry: country,
    });
  }
  setMovieByYear(year) {
    this.setState({
      displayMovieByYear: year,
    });
  }
  render() {
    return (
      <UI
        setCountry={this.setCountry}
        state={this.state}
        setMovieByYear={this.setMovieByYear}
      />
    );
  }
}

// get unique country items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const movie_category = movieData.map(film => film.country).filter(uniqueItems);
const movie_category_by_year = movieData
  .map(film => film.year)
  .filter(uniqueItems);
movie_category_by_year.push('all');
movie_category_by_year.sort();

movie_category.push('all');
movie_category.sort();
