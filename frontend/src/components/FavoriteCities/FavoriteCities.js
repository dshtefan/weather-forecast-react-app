import React from 'react';
import './FavoriteCities.scss';
import FavoriteCityContainer from "../../containers/FavoriteCityContainer";

const FavoriteCities = ({ cities }) => {
  return (
    <div className="city-list">
      {cities.map((el, i) => (<FavoriteCityContainer city={el} key={i} i={i}/>))}
    </div>
  )
};

export default FavoriteCities;