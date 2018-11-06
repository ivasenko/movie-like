import React, { Component } from 'react';
import { Search } from '../Search';
import { SignUp } from '../SignUp';
import { getMovie } from '../../utils/api';

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
      <div className="header">
        <h1>MovieLike</h1>
        <SignUp />
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
