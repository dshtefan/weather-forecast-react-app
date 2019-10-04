import React, { useState, useEffect } from 'react'
import { getWeatherByCityName } from '../../utils/getWeather'
import { weatherDataProcessing } from '../../utils/weatherDataProcessing'

import './city-default.scss'

import navIcon from './svg/navigation.svg'
import nonFavIcon from './svg/favorite.svg'
import favIcon from './svg/fillFavorite.svg'

const CityDefault = () => {
  const [data, setData] = useState({})
  let isFav = true
  
  useEffect(() => {
    getWeatherByCityName('London', 'd3fb6b0837add2d07e9d69ef97b85afd')
      .then((res) => {
        setData(weatherDataProcessing(res.data))
      })
  })

  return (
    <div>
      <div id="icons-bar">
        <img id="navIcon" src={navIcon}/>
        <img id="favIcon" src={isFav ? favIcon : nonFavIcon}/>
      </div>
      <div id="city-info">
        <div id="city-info-day-time">
          <div id="city-info-time">18:00</div>
          <div id="city-info-day">Tuesday</div>
        </div>
        <div id="city-info-name">Barcelona</div>
        <div id="city-info-weather">Sun</div>
      </div>
      <div id="cd-weather-icon"></div>
      <div id="cd-temp">24°</div>
      <div id="сd-weather-values">
        <div>Pressure:<span id="cd-pressure"></span></div>
        <div>Wind<span id="cd-wind"></span></div>
        <div>Humidity:<span id="cd-himidity"></span></div>
        <div>Coord: <span id="cd-coord"></span></div>
      </div>
    </div>
  )
}

export default CityDefault