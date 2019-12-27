import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as utils from "./utils";
import * as actions from './actions';
import Page from './components/Page'
import {addFavoriteCity} from "./utils/getWeather";

const App = (props) => {
  const {deleteCityFromQueue, addErrorMessage, clearErrorMessage, cityError, cityLoaded,
    cityRequest, locLoaded, locError, cityByCoordsLoaded, updateLoadingStatus, addCityToQueue, state} = props;
  const { apiKey, cityDefault, isGeoPosAvailable, cityByCoords, citiesQueue, cities } = state;
  const { getWeatherByCityName, getWeatherByCoord, dataDestructuring, getGeoPosition, saveToLocalStorage, getLocalState } = utils;

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

  const isContain = (cityName) => cities.reduce((flag, {city}) => city === cityName ? true : flag || false, false);

  useEffect(() => {
    if(citiesQueue.length > 0){
      cityRequest();
      getWeatherByCityName(citiesQueue[0], apiKey)
        .then(async (res) => {
          if (!isContain(res.data.name)) {
            res.data.id = (await addFavoriteCity(res.data.name)).data._id;
            cityLoaded(dataDestructuring(res.data));
            clearErrorMessage();
          } else {
            cityError();
            addErrorMessage('city already exists');
          }
        })
        .catch((err) => {
          cityError();
          addErrorMessage(err.message);
        });
      deleteCityFromQueue();
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

  useEffect(() => {
    getLocalState().then((citiesQueue) => {
      if(citiesQueue)
        citiesQueue.map((city) => addCityToQueue(city))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return <Page/>;
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(App);
