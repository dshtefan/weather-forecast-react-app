import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import './city-default.scss';

import navIcon from './svg/navigation.svg';
import nonFavIcon from './svg/favorite.svg';
import favIcon from './svg/fillFavorite.svg';
import Spinner from '../spinner';

const CityDefault = ({ city }) => {
  const [loading, setLoading] = useState(true);
  let isFav = false;

  useEffect(() => {
    if(city)
      setLoading(false);
  }, [city]);

  return (
    <div id="city-default">
      {loading
        ? <Spinner />
        : <div>
          <div id="icons-bar">
            <img id="navIcon" src={navIcon} alt=""/>
            <img id="favIcon" src={isFav ? favIcon : nonFavIcon} alt=""/>
          </div>
          <div id="city-info">
            <div id="city-info-name">{city.city}</div>
            <div id="city-info-weather">{city.main}</div>
          </div>
          <div id="cd-weather-icon">
            <img src={`/icons/${city.icon}.svg`} alt=""/>
          </div>
          <div id="cd-temp">{`${city.temp}°`}</div>
          <div id="сd-weather-values">
            <div>Pressure: <span id="cd-pressure">{city.pressure} pHa</span></div>
            <div>Wind: <span id="cd-wind">{city.wind} m/s</span></div>
            <div>Humidity: <span id="cd-himidity">{city.humidity}%</span></div>
            <div>Coord: <span id="cd-coord">{`[${city.lat}: ${city.lon}]`}</span></div>
          </div>
        </div>
      }
    </div>
  )
};

const mapStateToProps = ({ frontCity, cities }) => ({
  city: cities[frontCity]
});

export default connect(mapStateToProps)(CityDefault);