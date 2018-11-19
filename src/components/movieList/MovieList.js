import React from 'react';
import MovieListItem from '../movieListItem/MovieListItem';
// import styles from './MovieList.scss';

const MovieList = props => {
  const items = props.movies.map((item, i) => {
    return <MovieListItem key={i} item={item} />;
  });
  return <div className="movieList">{items}</div>;
};
export default MovieList;
