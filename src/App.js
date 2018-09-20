import React, { Component } from 'react';
import './App.css';

import  {Header}  from './components/Header';
import  MovieList  from './components/MovieList';

import JSON from '../src/db.json';

class App extends Component {

  state = {
    movies: JSON
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="App">
         <Header/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
