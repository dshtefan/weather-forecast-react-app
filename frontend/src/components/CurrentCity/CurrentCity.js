import React  from 'react';
import './CurrentCity.scss';
import WeatherIcon from "../WeatherIcon";
import WeatherInfo from "../WeatherInfo";
import Spinner from "../Spinner";

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
            <WeatherIcon iconNumber={city.icon} />
          </div>
          <div className="current-city__temperature">{city.temp}°</div>
        </div>
        <div className="current-city__info">
          <WeatherInfo {...city} />
        </div>
      </div>
);

export default CurrentCity;