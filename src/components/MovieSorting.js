import React, { Component } from 'react';

const movieSorting = {
    type: [
        {
            id: 1,
            name: 'comedy'
        },
        {
            id: 2,
            name: 'drama'
        },
        {
            id: 3,
            name: 'thriller'
        }
    ],
    country: [
        {
            id: 1,
            name: 'usa'
        },
        {
            id: 2,
            name: 'germany'
        },
        {
            id: 3,
            name: 'france'
        }
    ],
    year: [
        {
            id: 1,
            name: '2018'
        },
        {
            id: 2,
            name: '2000'
        },
        {
            id: 3,
            name: '1990'
        }
    ]

};

function searchFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export class MovieSorting extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieSorting: movieSorting,
            term: '',
        }
        this.searchHandler=this.searchHandler.bind(this);
    }
    searchHandler(event){
        this.setState({term: event.target.value})
    }

    render() {
        const {movieSorting, term} = this.state;
      return (
          <div className="movieSorting">
            <h1>MovieSorting</h1>
              <div className="movie-sorting">
                  <form>
                      <input
                          type="text"
                          onChange={this.searchHandler}
                          value={term}
                      />
                  </form>
                  <h3 style={{fontWeight: 'bold'}}>Type</h3>
                  {
                      movieSorting.type.filter(searchFor(term)).map(movie =>
                          <div>{movie.name}</div>
                      )
                  }
                  <h3 style={{fontWeight: 'bold'}}>Country</h3>
                  {
                      movieSorting.country.filter(searchFor(term)).map(movie =>
                          <div>{movie.name}</div>
                      )
                  }
                  <h3 style={{fontWeight: 'bold'}}>Year</h3>
                  {
                      movieSorting.year.filter(searchFor(term)).map(movie =>
                          <div>{movie.name}</div>
                      )
                  }
              </div>
          </div>
      );
    }
}