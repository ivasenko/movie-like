export const getMovie = () => {
  return fetch(
    `https://raw.githubusercontent.com/ivasenko/movie-like/main-template/src/movieData.json`
  ).then(response => response.json());
};
