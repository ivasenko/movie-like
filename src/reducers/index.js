import { GET_MOVIE_SUCCESS } from '../actions/types';

export default function bookmarksReducer(state = {}, action) {
  switch (action.type) {
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}
