import React from 'react';
import './FavoriteCity.scss';
import deleteIcon from './svg/delete.svg';
import { Spinner, WeatherInfo } from "../";

const FavoriteCity = ({ city, loading, deleteCity }) => {
  return (
    <div className="item">
      {loading ?
        <Spinner/> :
        <div className="item-content">
          <div className="item-header">
            <div className="item-header-city">{city.city}</div>
            <img className="del-icon" src={deleteIcon} alt="" onClick={deleteCity} />
          </div>
          <div className="item-body">
            <div className="item-body-left">
              <div className="item-temperature">{city.temp}°</div>
              <img src={`https://dshtefan.github.io/weather-search-2/icons/${city.icon}.svg`} alt="" />
            </div>
            <WeatherInfo {...city} />
          </div>
        </div>
      }
    </div>
  )
};

export default FavoriteCity;