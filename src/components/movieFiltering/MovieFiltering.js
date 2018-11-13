import React, { Component } from 'react';
import movieData from '../../movieData';
import { Filter } from './Filter';
import styles from './MovieFiltering.scss';

const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const movieCategories = movieData.map(film => film.country).filter(uniqueItems);

movieCategories.push('all');
movieCategories.sort();

export class MovieFiltering extends Component {
  render() {
    return (
      <div className={styles.movieFiltering}>
        <Filter
          films={movieData}
          setActiveFilers={this.props.setActiveFilers}
        />
      </div>
    );
  }
}
