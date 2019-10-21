const updateInputField = (text) => ({
  type: 'UPDATE_INPUT_FIELD',
  text
});

const updateLoadingStatus = (loading) => ({
  type: 'UPDATE_LOADING_STATUS',
  loading
});

const cityDelete = (index) => ({
  type: 'DELETE_CITY',
  index
});

const cityRequest = () => ({
  type: 'FETCH_CITY_REQUEST'
});

const cityLoaded = (city) => ({
  type: 'FETCH_CITY_SUCCESS',
  city
});

const locRequested = () => ({
  type: 'FETCH_GEOLOCATION_REQUEST',
  isGeoPosAvailable: null
});

const locLoaded = () => ({
  type: 'FETCH_GEOLOCATION_SUCCESS',
  isGeoPosAvailable: true
});

const locError = () => ({
  type: 'FETCH_GEOLOCATION_FAILURE',
  isGeoPosAvailable: false
});

const cityByCoordsLoaded = (city) => ({
  type: 'FETCH_CITY_BY_COORDS_SUCCESS',
  city
});

export {
  cityRequest,
  cityLoaded,
  locError,
  locLoaded,
  locRequested,
  updateInputField,
  cityDelete,
  updateLoadingStatus,
  cityByCoordsLoaded
};