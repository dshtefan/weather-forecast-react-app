const initialState = {
  apiKey: '',
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
    case 'ADD_CITY':
      return {
        ...state,
        cities: [...state.cities, action.newCity]
      };
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