import axios from 'axios';

const getWeatherByCoord = (lat, lon) =>
  axios.get('http://localhost:3012/weather/coordinates', { params: { lat, lon } });

const getWeatherByCityName = (city) =>
  axios.get('http://localhost:3012/weather', { params: { city } });

const getFavoritesCities = () =>
  axios.get('http://localhost:3012/favorites');

const addFavoriteCity = (city) =>
  axios.post('http://localhost:3012/favorites', { city });

const deleteFavoriteCity = (id) =>
  axios.delete('http://localhost:3012/favorites', { params: { id } });

export {
  getWeatherByCoord,
  getWeatherByCityName,
  getFavoritesCities,
  addFavoriteCity,
  deleteFavoriteCity
};