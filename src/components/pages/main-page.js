import React from 'react';
import CityDefault from '../city-default';
import CityList from '../city-list';

import './main-page.scss';

const MainPage = () => {
  return (
    <div id={'main-page'}>
      <CityDefault />
      <CityList />
    </div>
  )
};

export default MainPage;