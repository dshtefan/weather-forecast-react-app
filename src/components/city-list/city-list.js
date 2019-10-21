import React from 'react';
import { connect } from 'react-redux';

import './city-list.scss';

import CityListItem from '../city-list-item';
import InputBox from '../input-box';

const CityList = ({ cities }) => {
  return (
    <div id="city-list">
      <InputBox />
      {
        cities.map((el, i) => (<CityListItem city={el} key={i} i={i}/>))
      }
    </div>
  )
};

const mapStateToProps = ({ frontCity, cities }) => ({
  cities,
  frontCity
});

export default connect(mapStateToProps)(CityList);