const apiLoaded = (key) => ({
  type: 'API_LOADED',
  payload: key
});

const cityDataLoaded = (cityData) => ({
  type: 'ADD_CITY',
  newCity: cityData
});

const locRequested = () => ({
  type: 'FETCH_GEOLOCATION_REQUEST',
  loadingCoords: true,
  isGeoPosAvailable: null
});

const locLoaded = () => ({
  type: 'FETCH_GEOLOCATION_SUCCESS',
  loadingCoords: false,
  isGeoPosAvailable: true
});

const locError = () => ({
  type: 'FETCH_GEOLOCATION_FAILURE',
  loadingCoords: false,
  isGeoPosAvailable: false
});

export {
  apiLoaded,
  cityDataLoaded,
  locError,
  locLoaded,
  locRequested
};