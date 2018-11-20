import React from 'react';
import styles from './MovieListItem.scss';
import { Link } from 'react-router-dom';

const MovieListItem = ({ item }) => {
  console.log('item', item);

  return (
    <div className="movieItem" style={{ position: 'relative' }}>
      <div className="movieItemLeft">
        <img src={item.img} alt={item.img} width="300" height="200" />
      </div>
      <div className="movieItemRight">
        <div className="movieItemTitle">{item.title}</div>
        <div>Slogan: {item.phrase}</div>
        <div>Type: {item.type}</div>
        <div>Country: {item.country}</div>
        <div>Year: {item.year}</div>
        <div>
          <button>
            <Link to={`items/${item.id}`}>SHOW MORE ...</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieListItem;
