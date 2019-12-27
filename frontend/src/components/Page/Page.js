import React from 'react';
import './Page.scss';
import InputContainer from "../../containers/InputContainer";
import IconBarContainer from "../../containers/IconBarContainer";
import FavoriteCitiesContainer from "../../containers/FavoriteCitiesContainer";
import CurrentCityContainer from "../../containers/CurrentCityContainer";

const Page = () => (
  <div className="page">
    <InputContainer/>
    <IconBarContainer/>
    <FavoriteCitiesContainer/>
    <CurrentCityContainer/>
  </div>
);

export default Page;