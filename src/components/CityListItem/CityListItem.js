import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './CityListItem.scss';
import deleteIcon from './svg/delete.svg';
import { cityDelete } from "../../actions";
import Spinner from '../Spinner';
import WeatherInfo from "../WeatherInfo";

const CityListItem = ({ city, i, cityDelete }) => {
  const [ loading, setLoading ] = useState(true);
  const deleteCity = () => cityDelete(i);

  useEffect(() => {
    if(city && JSON.stringify(city) !== '{}'){
      setLoading(false);}
    else
      setLoading(true);
  }, [city]);

  return (
    <div className="item">
      {loading ?
        <Spinner/> :
        <div className="item-content">
          <div className="item-header">
            <div className="item-header-city">{city.city}</div>
            <img className="del-icon" src={deleteIcon} alt="" onClick={deleteCity} />
          </div>
          <div className="item-body">
            <div className="item-body-left">
              <div className="item-temperature">{city.temp}°</div>
              <img src={`https://dshtefan.github.io/weather-search-2/icons/${city.icon}.svg`} alt="" />
            </div>
            <WeatherInfo {...city} />
          </div>
        </div>
      }
    </div>
  )
};

export default connect(null, { cityDelete })(CityListItem);