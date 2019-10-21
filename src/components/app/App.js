import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './app.scss';

import { MainPage } from '../pages';
import {cityByCoordsLoaded, cityLoaded, cityRequest, locError, locLoaded, locRequested} from '../../actions';
import {getWeatherByCityName, getWeatherByCoord} from "../../utils/getWeather";
import {weatherDataProcessing} from "../../utils/weatherDataProcessing";
import {getGeoPosition} from "../../utils/getGeoPosition";

const App = ({
               apiKey,
               inputField,
               cityLoaded,
               isGeoPosAvailable,
               cityRequest,
               locLoaded,
               cityDefault,
               locError,
               cityByCoordsLoaded,
               state}) => {

  useEffect(() => {
    if(inputField){
      cityRequest();
      getWeatherByCityName(inputField, apiKey)
        .then((res) => {
          cityLoaded(weatherDataProcessing(res.data));
        })
        .catch((err) => {
          cityLoaded({error: err.message});
        });
    }
  }, [inputField, apiKey, cityLoaded, cityRequest]);

  const successGeoLocCallback = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    locLoaded();
    getWeatherByCoord(lat, lon, apiKey)
      .then((res) => {
        cityByCoordsLoaded(weatherDataProcessing(res.data));
      });
  };

  const errorGeoLocCallback = () => {
    locError();
    getWeatherByCityName(cityDefault, apiKey)
      .then((res) => {
        cityByCoordsLoaded(weatherDataProcessing(res.data));
      });
  };

  useEffect(() => {
    if(isGeoPosAvailable === null)
      getGeoPosition(successGeoLocCallback, errorGeoLocCallback);
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify({...state, inputField: null}));
  }, [state]);

  return (
    <div id={'app'}>
      <MainPage />
    </div>
  )
};

const mapStateToProps = (state) => {
  const { apiKey, cityDefault, isGeoPosAvailable, inputField, cityByCoords } = state;
  return {
    apiKey,
    inputField,
    isGeoPosAvailable,
    cityByCoords,
    cityDefault,
    state
  }
};

const mapDispatchToProps = {
  cityLoaded,
  cityRequest,
  locError,
  locLoaded,
  locRequested,
  cityByCoordsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
