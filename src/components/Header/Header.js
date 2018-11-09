import React, { Component } from 'react';
import { Search } from '../Search';
import { getMovie } from '../../utils/api';
import Slider from "react-slick/lib";
// import {MovieSlider} from "../MovieSlider";
import MovieList from "../MovieList";
import MovieListItem from "../MovieListItem";

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
          slidesToShow: 1,
          slidesToScroll: 1
      };
    return (
      <div className="header">
        <h1>MovieLike</h1>
          <Slider {...settings}>
              <div>
              <MovieList className="divSlider" movies={this.state.movieSorting} />
          </div>
              <div>
                  <MovieList className="divSlider" movies={this.state.movieSorting} />
              </div>
          </Slider>
          {/*<div>*/}
          {/*<h3 className="slide">1</h3>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<h3 className="slide">2</h3>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<h3 className="slide">3</h3>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<h3 className="slide">4</h3>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<h3 className="slide">5</h3>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<h3 className="slide">6</h3>*/}
          {/*</div>*/}
          <div className="movieSearching">
          <form>
            <input type="text" onChange={this.searchHandler} value={term} />
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
