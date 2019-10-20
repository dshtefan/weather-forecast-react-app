import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './app.scss';

import { MainPage } from '../pages';
import { apiLoaded } from '../../actions';
import {getWeatherByCityName} from "../../utils/getWeather";
import {weatherDataProcessing} from "../../utils/weatherDataProcessing";

const App = ({ apiKey, frontCity, inputField }) => {

  useEffect(() => {
    if(inputField){
      getWeatherByCityName(inputField, apiKey)
        .then((res) => {
          weatherDataProcessing(res.data);
        });
    }
  }, [inputField]);

  return (
    <div id={'app'}>
      <MainPage />
    </div>
  )
};

const mapStateToProps = ({ apiKey, frontCity, inputField }) => ({
  apiKey,
  frontCity,
  inputField
});

const mapDispatchToProps = {
  apiLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
