import React, { useState, useEffect } from 'react';
import { getWeatherByCityName } from '../../utils/getWeather';
import { weatherDataProcessing } from '../../utils/weatherDataProcessing';

import './city-default.scss';

import navIcon from './svg/navigation.svg';
import nonFavIcon from './svg/favorite.svg';
import favIcon from './svg/fillFavorite.svg';
import Spinner from '../spinner';

const CityDefault = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [city] = useState('London');
  const [apiKey] = useState('3dd82107b17241c740a2a087d34da02d');
  let isFav = true;
  
  useEffect(() => {
    setLoading(true);
    getWeatherByCityName(city, apiKey)
      .then((res) => {
        setData(weatherDataProcessing(res.data));
        setLoading(false);
      });
  }, [city, apiKey]);

  return (
    <div>
      {loading? <Spinner /> :
        <div>
          <div id="icons-bar">
            <img id="navIcon" src={navIcon} alt=""/>
            <img id="favIcon" src={isFav ? favIcon : nonFavIcon} alt=""/>
          </div>
          <div id="city-info">
            <div id="city-info-name">{data.city}</div>
            <div id="city-info-weather">{data.main}</div>
          </div>
          <div id="cd-weather-icon"></div>
          <div id="cd-temp">{`${data.temp}°`}</div>
          <div id="сd-weather-values">
            <div>Pressure: <span id="cd-pressure">{data.pressure} pHa</span></div>
            <div>Wind: <span id="cd-wind">{data.wind} m/s</span></div>
            <div>Humidity: <span id="cd-himidity">{data.humidity}%</span></div>
            <div>Coord: <span id="cd-coord">{`[${data.lat}: ${data.lon}]`}</span></div>
          </div>
        </div>
      }
    </div>
  )
};

export default CityDefault;