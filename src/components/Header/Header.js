import React, { Component } from 'react';
import { Search } from '../Search';
import { getMovie } from '../../utils/api';
import Slider from 'react-slick/lib';
import FontAwesome from 'react-fontawesome';
import MovieListItem from '../MovieListItem';

function searchFor(term) {
  const termLowCase = term.toLowerCase();
  return function(x) {
    const title = x.title.toLowerCase();
    return title.indexOf(termLowCase) === 0 || !termLowCase;
  };
}

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieSorting: [],
      term: '',
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    getMovie().then(response => {
      this.setState({ movieSorting: response });
    });
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }
  loadSearchList() {
    if (this.state.term !== '') {
      return true;
    }
  }

  render() {
    const { movieSorting, term } = this.state;

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className="header">
        <div className="logo">
          <span>MovieLike</span>
          <FontAwesome name="home" />
        </div>
        <Slider {...settings}>
          {this.state.movieSorting.map((item, i) => (
            <div className="slide" key={i}>
              <MovieListItem item={item} />
            </div>
          ))}
        </Slider>

        <div className="movieSearching">
          <form>
            <input
              placeholder="Search a movie"
              type="text"
              onChange={this.searchHandler}
              value={term}
            />
          </form>
          <div>
            {movieSorting
              .filter(searchFor(term))
              .map(
                movie =>
                  this.state.term ? (
                    <Search key={movie.id} movie={movie} />
                  ) : null
              )}
          </div>
        </div>
      </div>
    );
  }
}
