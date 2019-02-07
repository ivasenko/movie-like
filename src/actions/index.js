import { GET_MOVIE_SUCCESS } from './types';

export const getMovieSuccess = payload => ({
  type: GET_MOVIE_SUCCESS,
  payload,
});
