import React from 'react';
import CurrentCity from './CurrentCity';

describe('CurrentCity', () => {
  const cityError = { error: 'cityError' };
  const city = {
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
    city,
    loading: true
  };

  describe('загрузка', () => {
    const currentCity = shallow(<CurrentCity {...props}/>);
    it('отображается корректно', () => expect(shallowToJson(currentCity)).toMatchSnapshot());
  });

  describe('ошибка при получении города', () => {
    const nextProps = {
      ...props,
      loading: false,
      city: cityError
    };
    const currentCity = shallow(<CurrentCity {...nextProps} />);
    it('отображается корректно', () => expect(shallowToJson(currentCity)).toMatchSnapshot());
  });

  describe('отображение города', () => {
    const nextProps = {
      ...props,
      loading: false
    };
    const currentCity = shallow(<CurrentCity {...nextProps} />);
    it('отображается корректно', () => expect(shallowToJson(currentCity)).toMatchSnapshot());
  });

});