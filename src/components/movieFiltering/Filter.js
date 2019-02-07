import React, { Component } from 'react';
import movieData from '../../movieData';
import styles from './MovieFiltering.scss';
import { connect } from 'react-redux';

const ButtonCategories = (movieCategories, setCountry) =>
  movieCategories.map(country => (
    <button
      key={country}
      className={styles.filterItem}
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

    <div className="filterBtnYear">
      <h3>Filter by Year</h3>
      {ButtonCategoriesByYear(movieCategoriesByYear, setMovieByYear)}
    </div>
    <div className="filterBtnType">
      <h3>Filter by Type</h3>
      {ButtonCategoriesByType(movieCategoriesByType, setMovieByType)}
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
    this.props.setActiveFilers({ type: 'country', value: country });
  }
  setMovieByYear(year) {
    this.props.setActiveFilers({ type: 'year', value: year });
  }
  setMovieByType(type) {
    this.props.setActiveFilers({ type: 'type', value: type });
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

// const mapStateToProps = state => {
//     return {
//         movieCategories: state.movieCategories,
//         movieCategoriesByYear: state.movieCategoriesByYear,
//         movieCategoriesByType: state.movieCategoriesByType,
//         setCountry: state.setCountry,
//         setMovieByYear: state.setMovieByYear,
//         setMovieByType: state.setMovieByType,
//     };
// };
//
// export default connect(
//     mapStateToProps
// ) (UI);
