const apiLoaded = (key) => ({
  type: 'API_LOADED',
  payload: key
});

const updateInputField = (text) => ({
  type: 'UPDATE_INPUT_FIELD',
  text
});

const cityLoaded = (city) => ({
  type: 'FETCH_CITY_SUCCESS',
  city
});

const cityUpdate = (i, city) => ({
  type: 'UPDATE_CITY_SUCCESS',
  city,
  i
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
  cityLoaded,
  locError,
  locLoaded,
  locRequested,
  updateInputField,
  cityUpdate
};