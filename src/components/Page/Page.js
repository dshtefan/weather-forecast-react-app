import React from 'react';
import './Page.scss';
import {
  IconBarContainer,
  InputContainer,
  FavoriteCitiesContainer,
  CurrentCityContainer
} from '../../containers'

const Page = () => (
  <div className="page">
    <InputContainer/>
    <IconBarContainer/>
    <FavoriteCitiesContainer/>
    <CurrentCityContainer/>
  </div>
);

export default Page;