import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './app.scss';

import { MainPage } from '../pages';
import { cityLoaded } from '../../actions';
import {getWeatherByCityName} from "../../utils/getWeather";
import {weatherDataProcessing} from "../../utils/weatherDataProcessing";

const App = ({ apiKey, inputField, cities, cityLoaded }) => {

  useEffect(() => {
    if(inputField){
      getWeatherByCityName(inputField, apiKey)
        .then((res) => {
          cityLoaded(weatherDataProcessing(res.data));
        });
    }
  }, [inputField, apiKey, cityLoaded]);

  useEffect(() => {
    console.log("dwdqwqdwd");
    console.log(cities);
  }, [cities]);

  return (
    <div id={'app'}>
      <MainPage />
    </div>
  )
};

const mapStateToProps = ({ apiKey, frontCity, inputField, cities }) => ({
  apiKey,
  frontCity,
  inputField,
  cities
});

const mapDispatchToProps = {
  cityLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
