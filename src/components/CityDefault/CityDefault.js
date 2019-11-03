import React  from 'react';
import { connect } from 'react-redux';
import './CityDefault.scss';
import updIcon from './svg/update.svg';
import errIcon from './svg/err.svg'
import Spinner from '../Spinner';
import { locRequested } from "../../actions";
import WeatherInfo from "../WeatherInfo";

const CityDefault = ({ city, loading, locRequested, errorMessage }) => {
  const updCityInfo = () => locRequested();

  return (
    <div id="city-default">
      {loading
        ? <Spinner />
        : <div>
          <div id="icons-bar">
            <img id="navIcon" src={updIcon} alt="" onClick={updCityInfo}/>
            {errorMessage !== null ? <img id="errIcon" src={errIcon} alt=""/> : null}
            {errorMessage !== null ? <div className="error">{errorMessage}</div> : null}
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
                <WeatherInfo
                  pressure={city.pressure}
                  humidity={city.humidity}
                  wind={city.wind}
                  lat={city.lat}
                  lon={city.lon}
                  />
              </div>
            </div>
          }
        </div>
      }
    </div>
  )
};

const mapStateToProps = ({ loading, cityByCoords, errorMessage }) => ({
  city: cityByCoords,
  loading,
  errorMessage
});

export default connect(mapStateToProps, { locRequested })(CityDefault);