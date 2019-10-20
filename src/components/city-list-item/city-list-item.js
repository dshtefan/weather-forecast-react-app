import React from 'react';

import './city-list-item.scss';

import weatherIcon from './svg/weather-icon.svg';
import deleteIcon from './svg/delete.svg';

const CityListItem = () => {
  return (
    <div id="city-list-item">
      <div id="tab-info">
        <div id="tab-info-city">
          <div id="tab-info-city-text">
            Moscow
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
          <div className="weather-info-line">1000</div>
          <div className="weather-info-line">7</div>
          <div className="weather-info-line">90%</div>
          <div className="weather-info-line">[59.23, 30.42]</div>
        </div>
      </div>
    </div>
  )
};

export default CityListItem;