import React from 'react';
import FavoriteCities from './';

describe('FavoriteCities', () => {
  const cities = [
    {
      city: 'Moscow',
      main: 'Rain',
      icon: '10',
      temp: '2',
      pressure: '997',
      humidity: '86',
      wind: '5',
      lat: '60',
      lon: '30'
    },
    {
      city: 'London',
      main: 'Rain',
      icon: '1',
      temp: '20',
      pressure: '907',
      humidity: '86',
      wind: '2',
      lat: '20',
      lon: '40'
    }
  ];

  describe('пустой список городов', () => {
    const favotiteCities = shallow(<FavoriteCities cities={[]} />);
    it('отображается корректно', () => {
      expect(shallowToJson(favotiteCities)).toMatchSnapshot();
    });
  });

  describe('список городов', () => {
    const favotiteCities = shallow(<FavoriteCities cities={cities} />);
    it('отображается корректно', () => {
      expect(shallowToJson(favotiteCities)).toMatchSnapshot();
    });
  });

});