import React, { Component } from 'react';
import { getMovie } from '../utils/api';
import Slider from "react-slick/lib";
import MovieListItem from "./MovieListItem";

export class MovieSlider extends Component {
  state = {
      movieSorting: []
  };

  componentDidMount() {
    getMovie().then(response => {
      this.setState({ movieSorting: response });
    });

  }

  render() {
      let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
      };
    return (
        <Slider {...settings}>
            {this.state.movieSorting.map((item, i) => (
                <div className="slide" key={i}>
                    <MovieListItem item={item} />
                </div>
            ))}
        </Slider>

    );
  }
}
