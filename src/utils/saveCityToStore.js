import { getWeatherByCityName } from "./getWeather";
import dataDestructuring from "./weatherDataProcessing";

const saveCityToStore = ( city, apiKey, cityLoaded, cityError, cityRequest ) => {
  cityRequest();
  getWeatherByCityName(city, apiKey)
    .then((res) => {
      cityLoaded(dataDestructuring(res.data));
    })
    .catch(() => {
      cityError();
    });
};

export default saveCityToStore;