import React  from 'react';
import { connect } from 'react-redux';
import './CityDefault.scss';
import Spinner from '../Spinner';
import WeatherInfo from "../WeatherInfo";

const CityDefault = ({ city, loading }) => (
  loading ?
    <Spinner /> :
    city.error ?
      <div>{city.error}</div> :
      <div className="city-default">
        <div className="city-default__name">
          <div className="city-default__city-name">{city.city}</div>
          <div className="city-default__weather">{city.main}</div>
        </div>
        <div className="city-default__temp">
          <div className="city-default__weather-icon">
            <img src={`https://dshtefan.github.io/weather-search-2/icons/${city.icon}.svg`} alt="" />
          </div>
          <div className="city-default__temperature">{city.temp}°</div>
        </div>
        <div className="city-default__info">
          <WeatherInfo
            pressure={city.pressure}
            humidity={city.humidity}
            wind={city.wind}
            lat={city.lat}
            lon={city.lon}
            />
        </div>
      </div>
);

const mapStateToProps = ({ loading, cityByCoords }) => ({
  city: cityByCoords,
  loading
});

export default connect(mapStateToProps)(CityDefault);