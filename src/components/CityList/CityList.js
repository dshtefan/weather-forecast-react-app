import React from 'react';
import { connect } from 'react-redux';
import './CityList.scss';
import CityListItem from '../CityListItem';

const CityList = ({ cities }) => {
  return (
    <div className="city-list">
      {cities.map((el, i) => (<CityListItem city={el} key={i} i={i}/>))}
    </div>
  )
};

const mapStateToProps = ({ cities }) => ({
  cities
});

export default connect(mapStateToProps)(CityList);