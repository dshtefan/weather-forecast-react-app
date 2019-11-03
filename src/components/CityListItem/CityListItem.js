import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './CityListItem.scss';
import deleteIcon from './svg/delete.svg';
import { cityDelete } from "../../actions";
import Spinner from '../Spinner';
import WeatherInfo from "../WeatherInfo";

const CityListItem = ({ city, i, cityDelete }) => {
  const [ loading, setLoading ] = useState(true);
  const deleteCity = () => cityDelete(i);

  useEffect(() => {
    if(city && JSON.stringify(city) !== '{}'){
      setLoading(false);}
    else
      setLoading(true);
  }, [city]);

  return (
    <div className="city-list-item">
      {loading
        ? <Spinner/>
        : <div className="city-list-item">
          <div id="tab-info">
            <div id="tab-info-city">
              <div id="tab-info-city-text">
                {!city.error ? `${city.city} ${city.temp}°`: ''}
              </div>
            </div>
            <div id="tab-info-icon">
              <div id="tab-info-icon-svg">
                {!city.error ? <img src={`https://dshtefan.github.io/weather-search-2/icons/${city.icon}.svg`} alt=""/> : ''}
              </div>
            </div>
            <div id="tab-info-delete">
              <div id="tab-info-delete-svg">
                <img src={deleteIcon} alt="" onClick={deleteCity}/>
              </div>
            </div>
          </div>
          {city.error
            ? <div className="error-message">{city.error}</div>
            : <WeatherInfo
                pressure={city.pressure}
                humidity={city.humidity}
                wind={city.wind}
                lat={city.lat}
                lon={city.lon}
            />
          }
        </div>
      }
    </div>
  )
};

export default connect(null, { cityDelete })(CityListItem);