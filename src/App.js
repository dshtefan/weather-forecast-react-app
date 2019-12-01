import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as utils from "./utils";
import * as actions from './actions';
import Page from './components/Page'

const App = (props) => {
  const {deleteCityFromQueue, addErrorMessage, clearErrorMessage, cityError, cityLoaded, cityRequest, locLoaded, locError, cityByCoordsLoaded, updateLoadingStatus, state} = props;
  const { apiKey, cityDefault, isGeoPosAvailable, cityByCoords, cities, citiesQueue } = state;
  const { getWeatherByCityName, getWeatherByCoord, dataDestructuring, getGeoPosition, saveToLocalStorage } = utils;

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
  });

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
  });

  return <Page/>;
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(App);
