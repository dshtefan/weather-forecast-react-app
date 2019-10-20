const initialState = {
  apiKey: '3dd82107b17241c740a2a087d34da02d',
  inputField: '',
  cities: [],
  frontCity: 0,
  loadingCoords: true,
  isGeoPosAvailable: null,
  cityDefault: 'London',
  coords: {
    lat: null,
    lon: null
  },
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'API_LOADED':
      return {
        ...state,
        apiKey: action.payload
      };
    case 'UPDATE_INPUT_FIELD':
      return {
        ...state,
        inputField: action.text
      };
    case 'FETCH_CITY_SUCCESS':
      return {
        ...state,
        cities: [...state.cities, ...action.city]
      };
    case 'UPDATE_CITY_SUCCESS': {
      const cities = [...state.cities];
      cities[action.i] = action.city;
      return {
        ...state,
        cities
      }
    }
    case 'FETCH_GEOLOCATION_REQUEST':
      return {
        ...state,
        loadingCoords: action.loadingCoords,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    case 'FETCH_GEOLOCATION_SUCCESS':
      return {
        ...state,
        loadingCoords: action.loadingCoords,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    case 'FETCH_GEOLOCATION_FAILURE':
      return {
        ...state,
        loadingCoords: action.loadingCoords,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    default:
      return state
  }
};

export default reducer;