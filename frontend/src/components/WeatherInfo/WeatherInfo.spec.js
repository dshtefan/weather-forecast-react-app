import React from 'react';
import WeatherInfo from "./WeatherInfo";

describe('WeatherInfo', () => {
  const props =
    {
      pressure: '997',
      humidity: '86',
      wind: '5',
      lat: '60',
      lon: '30'
    };

  describe('с получеными данными', () => {
    const weatherInfo = shallow(<WeatherInfo {...props} />);
    it ('отображается корректно', () => {
      expect(shallowToJson(weatherInfo)).toMatchSnapshot();
    });
  });

  describe('с неполучеными данными', () => {
    const weatherInfo = shallow(<WeatherInfo />);
    it ('отображается корректно', () => {
      expect(shallowToJson(weatherInfo)).toMatchSnapshot();
    });
  });
});