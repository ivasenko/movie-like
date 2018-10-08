import React, { Component } from 'react';

export class Search extends Component {

    render() {
        return (
            <div className="movie-search">
                <div key={this.props.movie.id}>
                    <h3>{this.props.movie.title}</h3>
                    <div><img src={this.props.movie.img} alt={this.props.movie.img} width='300' height='200'/></div>
                </div>
            </div>
        )
    }
}
