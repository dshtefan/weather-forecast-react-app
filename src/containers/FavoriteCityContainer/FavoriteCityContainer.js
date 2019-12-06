import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { cityDelete } from "../../actions";
import FavoriteCity from "../../components/FavoriteCity";

const CityListItem = ({ city, i, cityDelete }) => {
  const [ loading, setLoading ] = useState(true);
  const deleteCity = () => cityDelete(i);

  useEffect(() => {
    if(city && JSON.stringify(city) !== '{}'){
      setLoading(false);}
    else
      setLoading(true);
  }, [city]);

  return <FavoriteCity
    city={city}
    loading={loading}
    deleteCity={deleteCity}
  />;
};

export default connect(null, { cityDelete })(CityListItem);