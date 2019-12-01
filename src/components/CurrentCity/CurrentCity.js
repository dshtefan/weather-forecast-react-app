import React  from 'react';
import './CurrentCity.scss';
import { Spinner, WeatherInfo } from "../";

const CurrentCity = ({ city, loading }) => (
  loading ?
    <Spinner /> :
    city.error ?
      <div>{city.error}</div> :
      <div className="current-city">
        <div className="current-city__name">
          <div className="current-city__city-name">{city.city}</div>
          <div className="current-city__weather">{city.main}</div>
        </div>
        <div className="current-city__temp">
          <div className="current-city__weather-icon">
            <img src={`https://dshtefan.github.io/weather-search-2/icons/${city.icon}.svg`} alt="" />
          </div>
          <div className="current-city__temperature">{city.temp}°</div>
        </div>
        <div className="current-city__info">
          <WeatherInfo {...city} />
        </div>
      </div>
);

export default CurrentCity;