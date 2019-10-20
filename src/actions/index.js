const apiLoaded = (key) => ({
  type: 'API_LOADED',
  payload: key
});

const cityDataLoaded = (cityData) => ({
  type: 'ADD_CITY',
  newCity: cityData
});

export {
  apiLoaded,
  cityDataLoaded
};