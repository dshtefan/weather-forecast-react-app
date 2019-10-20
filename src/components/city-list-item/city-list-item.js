import React from 'react';

import './city-list-item.scss';

import weatherIcon from './svg/weather-icon.svg';
import deleteIcon from './svg/delete.svg';

const CityListItem = ({ city }) => {
  return (
    <div id="city-list-item">
      <div id="tab-info">
        <div id="tab-info-city">
          <div id="tab-info-city-text">
            {`${city.city} ${city.temp}°`}
          </div>
        </div>
        <div id="tab-info-icon">
          <div id="tab-info-icon-svg">
            <img src={weatherIcon} alt=""/>
          </div>
        </div>
        <div id="tab-info-delete">
          <div id="tab-info-delete-svg">
            <img src={deleteIcon} alt=""/>
          </div>
        </div>
      </div>
      <div id="item-info">
        <div id="item-info-left">
          <div className="weather-info-line">Pressure:</div>
          <div className="weather-info-line">Wind:</div>
          <div className="weather-info-line">Humidity:</div>
          <div className="weather-info-line">Coord.:</div>
        </div>
        <div id="item-info-right">
          <div className="weather-info-line">{city.pressure} hPa</div>
          <div className="weather-info-line">{city.wind} m/s</div>
          <div className="weather-info-line">{city.humidity}%</div>
          <div className="weather-info-line">[{city.lat}, {city.lon}]</div>
        </div>
      </div>
    </div>
  )
};

export default CityListItem;