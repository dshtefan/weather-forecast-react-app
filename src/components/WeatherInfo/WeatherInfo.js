import React from 'react'
import './WeatherInfo.scss'

const WeatherInfo = ({ pressure, wind, humidity, lat, lon}) => {
  return (
    <div className="info-block">
      <div className="item-info">Pressure: {pressure} hPA</div>
      <div className="item-info">Wind: {wind} m/s</div>
      <div className="item-info">Humidity: {humidity}%</div>
      <div className="item-info">Coord: [{lat}, {lon}]</div>
    </div>
  );
};

export default WeatherInfo;