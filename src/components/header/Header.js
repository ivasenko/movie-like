import React, { Component } from 'react';
import { Search } from '../search/Search';
import { getMovie } from '../../utils/api';
import FontAwesome from 'react-fontawesome';
import styles from './Header.scss';
import { Link } from 'react-router-dom';

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

    return (
      <div className={styles.header}>
        <div className="logo">
          <span>MovieLike</span>
          <FontAwesome name="home" />
        </div>
        <div className={styles.headerRightSide}>
          <div className={styles.movieSearching}>
            <form>
              <input
                placeholder="Search a movie"
                type="text"
                onChange={this.searchHandler}
                value={term}
              />
              <button>Search</button>
            </form>
            <div>
              {this.state.term &&
                movieSorting
                  .filter(searchFor(term))
                  .map(movie => <Search key={movie.id} movie={movie} />)}
            </div>
          </div>
          <div className="sign-in">
            <Link to="/signin">SignIn</Link>
          </div>
          /
          <div className="sign-up">
            <Link to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
    );
  }
}
