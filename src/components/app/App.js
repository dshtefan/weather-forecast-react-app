import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './app.scss';
import { MainPage } from '../pages';
import { getWeatherByCityName, getWeatherByCoord } from "../../utils/getWeather";
import { dataDestructuring } from "../../utils/weatherDataProcessing";
import { getGeoPosition } from "../../utils/getGeoPosition";
import {
  cityByCoordsLoaded,
  cityLoaded,
  cityRequest,
  locError,
  locLoaded,
  locRequested,
  updateLoadingStatus
} from '../../actions';

const App = (props) => {
  const { cityLoaded, cityRequest, locLoaded, locError, cityByCoordsLoaded, updateLoadingStatus, state} = props;
  const { apiKey, cityDefault, isGeoPosAvailable, inputField, cityByCoords } = state;

  const successGeoLocCallback = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    locLoaded();
    getWeatherByCoord(lat, lon, apiKey)
      .then((res) => {
        cityByCoordsLoaded(dataDestructuring(res.data));
      })
      .catch((err) => {
        cityByCoordsLoaded({error: err.message});
      });
  };

  const errorGeoLocCallback = () => {
    locError();
    getWeatherByCityName(cityDefault, apiKey)
      .then((res) => {
        cityByCoordsLoaded(dataDestructuring(res.data));
      })
      .catch((err) => {
        cityByCoordsLoaded({error: err.message});
      });
  };

  useEffect(() => {
    if(inputField){
      cityRequest();
      getWeatherByCityName(inputField, apiKey)
        .then((res) => {
          cityLoaded(dataDestructuring(res.data));
        })
        .catch((err) => {
          cityLoaded({error: err.message});
        });
    }
  }, [inputField, apiKey, cityLoaded, cityRequest]);

  useEffect(() => {
    if(isGeoPosAvailable === null)
      getGeoPosition(successGeoLocCallback, errorGeoLocCallback);
  });

  useEffect(() => {
    if(cityByCoords && JSON.stringify(cityByCoords) !== '{}'){
      updateLoadingStatus(false);}
  }, [cityByCoords, updateLoadingStatus]);


  useEffect(() => {
    localStorage.setItem('state', JSON.stringify({...state, inputField: null}));
  }, [state]);

  return (
    <div id={'app'}>
      <MainPage />
    </div>
  );
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = {
  cityLoaded,
  cityRequest,
  locError,
  locLoaded,
  locRequested,
  cityByCoordsLoaded,
  updateLoadingStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
