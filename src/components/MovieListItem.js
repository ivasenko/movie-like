import React from 'react';

const  MovieListItem = ({item}) => {
    return(
        <div className="movie-item" style={{position: "relative"}}>
            <div style={{position: "absolute", top: 0, left: 0}}>{item.title}</div>
            <div style={{position: "absolute", top: "25px"}}>{item.year}</div>
            <div><img src={item.img} alt={item.img} width='300' height='200'/></div>
        </div>
    )
} 
export default MovieListItem;
