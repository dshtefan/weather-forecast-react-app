import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './app.scss';

import { MainPage } from '../pages';
import { cityLoaded } from '../../actions';
import {getWeatherByCityName} from "../../utils/getWeather";
import {weatherDataProcessing} from "../../utils/weatherDataProcessing";

const App = ({ apiKey, inputField, cityLoaded }) => {

  useEffect(() => {
    if(inputField){
      getWeatherByCityName(inputField, apiKey)
        .then((res) => {
          cityLoaded(weatherDataProcessing(res.data));
        });
    }
  }, [inputField, apiKey, cityLoaded]);

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
  cityLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
