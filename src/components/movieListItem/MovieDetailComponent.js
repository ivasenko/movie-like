import React, { Component } from 'react';
import { getMovie } from '../../utils/api';

class MovieDetailComponent extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const id = +this.props.match.params.itemId;
    getMovie().then(response => {
      const movie = response.filter(movie => movie.id === id)[0] || {};
      this.setState({ movie });
    });
  }

  render() {
    const { movie } = this.state;
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
export default MovieDetailComponent;
