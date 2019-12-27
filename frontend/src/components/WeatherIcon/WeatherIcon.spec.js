import React from 'react';
import WeatherIcon from "./WeatherIcon";

describe('WeatherIcon', () => {
  const numbers = ['01', '02', '03', '04', '09', '10', '11', '13', '50'];
  const iconNumber = undefined;

  describe('дефолтный кейс', () => {
    const weatherIcon = shallow(<WeatherIcon iconNumber={iconNumber} />);
    it ('отображается корректно', () => {
      expect(shallowToJson(weatherIcon)).toMatchSnapshot();
    });
  });

  describe('иконки', () => {
    for (let i = 0; i < numbers.length; i++) {
      const weatherIcon = shallow(<WeatherIcon iconNumber={numbers[i]} />);
      it ('отображаются корректно', () => {
        expect(shallowToJson(weatherIcon)).toMatchSnapshot();
      });
    }
  });
});