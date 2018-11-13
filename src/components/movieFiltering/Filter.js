import React, { Component } from 'react';
import movieData from '../../movieData';
import styles from './MovieFiltering.scss';

// function toggleClass(type){
//     if (type==='year'){
//         console.log('its year');
//
//     } else if (type==='country'){
//         console.log('its country');
//     } else {
//         console.log('its default');
//     }
// }
// const year = 2018;
//
// const Btn = () => (
//     <div onClick={ () => toggleClass(year)}>BTN</div>
// )

const MovieItem = ({ country, title, img, year, type }) => (
  <div className="country__list-item box flex-spread">
    {title}, {country}, {year}, {type}
    <img style={{ width: '150px', height: '150px' }} src={img} alt="{img}" />
    <div className={`country--${country} circle`} />
  </div>
);

const MovieItems = ({ state: { movies, displayCountry } }) => (
  <div>
    {movies
      .filter(
        ({ country }) => displayCountry === country || displayCountry === 'all'
      )
      .map(({ country, title, img, year, type }) => (
        <MovieItem
          key={`MovieItems-${title}`}
          country={country}
          title={title}
          img={img}
          year={year}
          type={type}
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
      .map(({ country, title, img, year, type }) => (
        <MovieItem
          key={`MovieItems-${title}`}
          country={country}
          year={year}
          title={title}
          type={type}
          img={img}
        />
      ))}
  </div>
);

const MovieItemsByType = ({ state: { movies, displayMovieByType } }) => (
  <div>
    {movies
      .filter(
        ({ type }) =>
          displayMovieByType === type || displayMovieByType === 'all'
      )
      .map(({ country, title, img, year, type }) => (
        <MovieItem
          key={`MovieItems-${title}`}
          country={country}
          year={year}
          title={title}
          type={type}
          img={img}
        />
      ))}
  </div>
);

const ButtonCategories = (movieCategories, setCountry) =>
  movieCategories.map(country => (
    <button
      key={country}
      className={styles.filterItem}
      // onClick={toggleClass('year')}
      onClick={() => setCountry(country)}
    >
      {country}
    </button>
  ));
const ButtonCategoriesByYear = (movieCategoriesByYear, setMovieByYear) =>
  movieCategoriesByYear.map(year => (
    <button
      key={year}
      className={styles.filterItem}
      onClick={() => setMovieByYear(year)}
    >
      {year}
    </button>
  ));
const ButtonCategoriesByType = (movieCategoriesByType, setMovieByType) =>
  movieCategoriesByType.map(type => (
    <button
      key={type}
      className={styles.filterItem}
      onClick={() => setMovieByType(type)}
    >
      {type}
    </button>
  ));
const UI = ({
  state,
  state: { movieCategories, movieCategoriesByYear, movieCategoriesByType },
  setCountry,
  setMovieByYear,
  setMovieByType,
  allMovies,
}) => (
  <div className="filterBlock">
    <div className="filterBtnCountry">
      <h3>Filter by Country</h3>
      {ButtonCategories(movieCategories, setCountry)}
    </div>
    <div className={styles.filterResultCountry}>
      <h3>Results</h3>
      <MovieItems state={state} />
    </div>
    <div className="filterBtnYear">
      <h3>Filter by Year</h3>
      {ButtonCategoriesByYear(movieCategoriesByYear, setMovieByYear)}
    </div>
    <div className={styles.filterResultYear}>
      <h3>Results</h3>
      <MovieItemsByYear state={state} />
    </div>
    <div className="filterBtnType">
      <h3>Filter by Type</h3>
      {ButtonCategoriesByType(movieCategoriesByType, setMovieByType)}
    </div>
    <div className={styles.filterResultType}>
      <h3>Results</h3>
      <MovieItemsByType state={state} />
    </div>
  </div>
);

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCountry: 'all',
      movies: movieData,
      movieCategories: movieCategory,

      displayMovieByYear: 'all',
      movieCategoriesByYear: movieCategoryByYear,
      displayMovieByType: 'all',
      movieCategoriesByType: movieCategoryByType,
    };
    this.setCountry = this.setCountry.bind(this);
    this.setMovieByYear = this.setMovieByYear.bind(this);
    this.setMovieByType = this.setMovieByType.bind(this);
  }
  setCountry(country) {
    this.setState({
      displayCountry: country,
    });
    this.props.setActiveFilers(country);
  }
  setMovieByYear(year) {
    this.setState({
      displayMovieByYear: year,
    });
  }
  setMovieByType(type) {
    this.setState({
      displayMovieByType: type,
    });
  }
  render() {
    return (
      <UI
        state={this.state}
        setCountry={this.setCountry}
        setMovieByYear={this.setMovieByYear}
        setMovieByType={this.setMovieByType}
      />
    );
  }
}

// get unique country items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const movieCategory = movieData.map(film => film.country).filter(uniqueItems);
const movieCategoryByYear = movieData
  .map(film => film.year)
  .filter(uniqueItems);
const movieCategoryByType = movieData
  .map(film => film.type)
  .filter(uniqueItems);
movieCategoryByType.push('all');
movieCategoryByType.sort();

movieCategoryByYear.push('all');
movieCategoryByYear.sort();

movieCategory.push('all');
movieCategory.sort();
