import React, { Component } from 'react';
import { getMovie } from '../../utils/api';

import { connect } from 'react-redux';
import { getMovieSuccess } from '../../actions';

class MovieDetailComponent extends Component {
  componentDidMount() {
    getMovie().then(response => {
      this.props.propsGetMovieSuccess(response);
    });
  }

  render() {
    const { movies = [] } = this.props;
    const id = +this.props.match.params.itemId;
    const movie = movies.filter(movie => movie.id === id)[0] || {};

    return (
      <div className="movieDetailComponent">
        <div className="movieDetail" style={{ position: 'relative' }}>
          <div className="movieDetailLeft">
            <div
              className="movieDetailImg"
              style={{ backgroundImage: `url(${movie.img})` }}
            />
          </div>
          <div className="movieDetailRight">
            <div className="movieItemTitle">{movie.title}</div>
            <div>Slogan: {movie.phrase}</div>
            <div>Type: {movie.type}</div>
            <div>Country: {movie.country}</div>
            <div>Year: {movie.year}</div>
            <div>Description: {movie.description}</div>
            <div className="movieComment">
              Comments:
              <div>
                <textarea name="comment" id="comment" cols="10" rows="2" />
              </div>
              <div>
                <button>Add comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    propsGetMovieSuccess: response => {
      dispatch(getMovieSuccess(response));
    },
  };
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(MovieDetailComponent);
