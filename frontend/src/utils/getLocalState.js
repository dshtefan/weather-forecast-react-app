import {getFavoritesCities} from "./getWeather";

const getLocalState = async () => {
  const citiesQueue = (await getFavoritesCities()).data;
  if (citiesQueue)
    return citiesQueue.map(({cityName}) => cityName);
  else
    return null;
};

export default getLocalState;