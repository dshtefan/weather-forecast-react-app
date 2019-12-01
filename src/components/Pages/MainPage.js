import React from 'react';
import CityDefault from '../CityDefault';
import CityList from '../CityList';
import './MainPage.scss';
import InputBox from "../InputBox/InputBox";
import IconBar from "../IconBar";

const MainPage = () =>
  <div className={'main-page'}>
    <InputBox/>
    <IconBar/>
    <CityList/>
    <CityDefault/>
  </div>;

export default MainPage;