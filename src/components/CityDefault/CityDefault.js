import React  from 'react';
import { connect } from 'react-redux';
import './CityDefault.scss';
import updIcon from './svg/update.svg';
import Spinner from '../Spinner';
import { locRequested } from "../../actions";

const CityDefault = ({ city, loading, locRequested }) => {
  const updCityInfo = () => locRequested();

  return (
    <div id="city-default">
      {loading
        ? <Spinner />
        : <div>
          <div id="icons-bar">
            <img id="navIcon" src={updIcon} alt="" onClick={updCityInfo}/>
          </div>
          {city.error
            ? <div>{city.error}</div>
            : <div>
              <div id="city-info">
                <div id="city-info-name">{city.city}</div>
                <div id="city-info-weather">{city.main}</div>
              </div>
              <div id="cd-weather-icon">
                <img src={`https://dshtefan.github.io/weather-search-2/icons/${city.icon}.svg`} alt=""/>
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
      }
    </div>
  )
};

const mapStateToProps = ({ loading, cityByCoords }) => ({
  city: cityByCoords,
  loading
});

export default connect(mapStateToProps, { locRequested })(CityDefault);