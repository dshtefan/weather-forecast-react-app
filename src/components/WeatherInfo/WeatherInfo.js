import React from 'react'
import './WeatherInfo.scss'

const WeatherInfo = ({ pressure, wind, humidity, lat, lon}) => {
  return (
    <div id="item-info">
      <div id="item-info-left">
        <div className="weather-info-line">Pressure:</div>
        <div className="weather-info-line">Wind:</div>
        <div className="weather-info-line">Humidity:</div>
        <div className="weather-info-line">Coord.:</div>
      </div>
      <div id="item-info-right">
        <div className="weather-info-line">{pressure} hPa</div>
        <div className="weather-info-line">{wind} m/s</div>
        <div className="weather-info-line">{humidity}%</div>
        <div className="weather-info-line">[{lat}, {lon}]</div>
      </div>
    </div>
  );
};

export default WeatherInfo;