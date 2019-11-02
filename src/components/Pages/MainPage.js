import React from 'react';
import CityDefault from '../CityDefault';
import CityList from '../CityList';
import './MainPage.scss';

const MainPage = () =>
  <div id={'main-page'}>
    <CityDefault />
    <CityList />
  </div>;

export default MainPage;