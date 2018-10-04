import React, { Component } from 'react';
import './App.css';

import  {Header}  from './components/Header';
import  MovieList  from './components/MovieList';
import  {MovieSlider}  from './components/MovieSlider';
import  {MovieSorting}  from './components/MovieSorting';

import JSON from '../src/db.json';

 class App extends Component {

  state = {
    movies: JSON
  }

     render() {
         console.log(this.state.movies);
         return (
             <div className="App">
                 <Header />
                 <MovieSlider/>
                 <div className="mainScreen">
                 <MovieSorting/>
                 <MovieList movies={this.state.movies} />
                 </div>
                
             </div>

         );
     }
 }

export default App;
