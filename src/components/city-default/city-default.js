import React, { useState, useEffect } from 'react'
import { getWeatherByCityName } from '../../utils/getWeather'
import { weatherDataProcessing } from '../../utils/weatherDataProcessing'

const CityDefault = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    getWeatherByCityName('London', 'd3fb6b0837add2d07e9d69ef97b85afd')
      .then((res) => {
        setData(weatherDataProcessing(res.data))
      })
  })

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default CityDefault