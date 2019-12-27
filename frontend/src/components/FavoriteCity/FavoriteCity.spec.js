import React from 'react';
import FavoriteCity from './FavoriteCity';

describe('FavoriteCity', () => {
  const city =
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
    };
  const props = {
    city: city,
    loading: true,
    cityDelete: () => {}
  };

  describe('загрузка', () => {
    const favoriteCity = shallow(<FavoriteCity {...props} />);
    it ('отображается корректно', () => {
      expect(shallowToJson(favoriteCity)).toMatchSnapshot();
    });
  });

  describe('информация о погоде в городе', () => {
    const nextProps = {
      ...props,
      loading: false
    };
    const favoriteCity = shallow(<FavoriteCity {...nextProps} />);
    it ('отображается корректно', () => {
      expect(shallowToJson(favoriteCity)).toMatchSnapshot();
    });
  });
});