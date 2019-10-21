import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'

import './city-list-item.scss';

import weatherIcon from './svg/weather-icon.svg';
import deleteIcon from './svg/delete.svg';
import {cityDelete} from "../../actions";
import Spinner from '../spinner';

const CityListItem = ({ city, i, cityDelete }) => {
  const [loading, setLoading] = useState(true);
  const deleteCity = () => cityDelete(i);

  useEffect(() => {
    if(city && JSON.stringify(city) !== '{}'){
      setLoading(false);}
    else
      setLoading(true);
  }, [city]);

  return (
    <div id={"cli"+i} className="city-list-item">
      {loading
        ? <Spinner/>
        : <div className="city-list-item">
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
                <img src={deleteIcon} alt="" onClick={deleteCity}/>
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
      }
    </div>
  )
};

const mapDispatchToProps = {
  cityDelete
};

export default connect(null, mapDispatchToProps)(CityListItem);