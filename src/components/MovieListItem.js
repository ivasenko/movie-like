import React from 'react';

const  MovieListItem = ({item}) => {
    return(
        <div className="movie-item">
            <div>{item.title}</div>
            <div>{item.year}</div> 
            <div><img src={item.img} alt={item.img} width='300' height='200'/></div>
        </div>
    )
} 
export default MovieListItem;
