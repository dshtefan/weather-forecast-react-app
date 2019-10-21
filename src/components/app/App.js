import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './app.scss';

import { MainPage } from '../pages';
import {cityLoaded, cityRequest} from '../../actions';
import {getWeatherByCityName} from "../../utils/getWeather";
import {weatherDataProcessing} from "../../utils/weatherDataProcessing";

const App = ({ apiKey, inputField, cityLoaded, cityRequest }) => {

  useEffect(() => {
    if(inputField){
      cityRequest();
      getWeatherByCityName(inputField, apiKey)
        .then((res) => {
          cityLoaded(weatherDataProcessing(res.data));
        });
    }
  }, [inputField, apiKey, cityLoaded, cityRequest]);

  return (
    <div id={'app'}>
      <MainPage />
    </div>
  )
};

const mapStateToProps = ({ apiKey, frontCity, inputField }) => ({
  apiKey,
  frontCity,
  inputField,
});

const mapDispatchToProps = {
  cityLoaded,
  cityRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
