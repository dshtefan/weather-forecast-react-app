import React from 'react';
import { connect } from 'react-redux';
import './CityList.scss';
import CityListItem from '../CityListItem';
import InputBox from '../InputBox';

const CityList = ({ cities }) => {
  return (
    <div id="city-list">
      <InputBox />
      <div className={"city-list"}>
        {cities.map((el, i) => (<CityListItem city={el} key={i} i={i}/>))}
      </div>
    </div>
  )
};

const mapStateToProps = ({ frontCity, cities }) => ({
  cities,
  frontCity
});

export default connect(mapStateToProps)(CityList);