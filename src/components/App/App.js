import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { MainPage } from '../Pages';
import { getWeatherByCityName, getWeatherByCoord } from "../../utils/getWeather";
import dataDestructuring from "../../utils/weatherDataProcessing";
import getGeoPosition from "../../utils/getGeoPosition";
import saveToLocalStorage from "../../utils/saveToLocalStorage";
import {
  addErrorMessage,
  cityByCoordsLoaded,
  cityError,
  cityLoaded,
  cityRequest, clearErrorMessage, deleteCityFromQueue,
  locError,
  locLoaded,
  locRequested,
  updateLoadingStatus
} from '../../actions';

const App = (props) => {
  const {
    deleteCityFromQueue,
    addErrorMessage,
    clearErrorMessage,
    cityError,
    cityLoaded,
    cityRequest,
    locLoaded,
    locError,
    cityByCoordsLoaded,
    updateLoadingStatus,
    state
  } = props;
  const {
    apiKey,
    cityDefault,
    isGeoPosAvailable,
    cityByCoords,
    cities,
    citiesQueue
  } = state;

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
    if(citiesQueue.length > 0){
      if(cities.length < 4) {
        cityRequest();
        getWeatherByCityName(citiesQueue[0], apiKey)
          .then((res) => {
            cityLoaded(dataDestructuring(res.data));
            clearErrorMessage();
          })
          .catch((err) => {
            cityError();
            addErrorMessage(err.message);
          });
        deleteCityFromQueue();
      } else {
        deleteCityFromQueue();
      }
    }
  }, [
    citiesQueue,
    addErrorMessage,
    clearErrorMessage,
    cities,
    deleteCityFromQueue,
    apiKey,
    cityLoaded,
    cityRequest,
    cityError
  ]);

  useEffect(() => {
    if(isGeoPosAvailable === null)
      getGeoPosition(successGeoLocCallback, errorGeoLocCallback);
  });

  useEffect(() => {
    if(cityByCoords && JSON.stringify(cityByCoords) !== '{}')
      updateLoadingStatus(false);
  }, [cityByCoords, updateLoadingStatus]);


  useEffect(() => {
    saveToLocalStorage(state);
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
  updateLoadingStatus,
  cityError,
  deleteCityFromQueue,
  addErrorMessage,
  clearErrorMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
