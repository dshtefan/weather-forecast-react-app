import React from 'react';
import CityListItem from '../city-list-item';
import InputBox from '../input-box';

import './city-list.scss';

const CityList = () => {
  return (
    <div id="city-list">
      <InputBox />
      <CityListItem />
      <CityListItem />
      <CityListItem />
      <CityListItem />
    </div>
  )
};

export default CityList;