import axios from 'axios'

const getWeatherByCoord = (lat, lon, APIkey) =>
  axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
    params: {
      appid: APIkey,
      lat: lat,
      lon: lon
    }
  })

const getWeatherByCityName = (cityName, APIkey) =>
  axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
    params: {
      q: cityName,
      appid: APIkey
    }
  })


export {
  getWeatherByCoord,
  getWeatherByCityName
}