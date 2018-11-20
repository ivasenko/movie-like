import React from 'react';
import MovieListItem from '../movieListItem/MovieListItem';
// import styles from './MovieList.scss';

const MovieList = ({ movies }) => {
  const items = movies.map((item, i) => {
    return <MovieListItem key={i} item={item} />;
  });
  return <div className="movieList">{items}</div>;
};
export default MovieList;
