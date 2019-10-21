const initialState = {
  apiKey: '3dd82107b17241c740a2a087d34da02d',
  inputField: null,
  cities: [],
  frontCity: 0,
  loading: true,
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
    case 'UPDATE_LADING_STATUS':
      return {
        ...state,
        loading: action.loading
      };
    case 'DELETE_CITY':{
      const cities = [...state.cities];
      cities.splice(action.index, 1);
      return {
        ...state,
        cities,
        loading: true
      };
    }
    case 'FETCH_CITY_SUCCESS':{
      const cities = [...state.cities];
      cities.unshift(action.city);
      return {
        ...state,
        cities,
        frontCity: 0
      }
    }
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
        loading: action.loadingCoords,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    case 'FETCH_GEOLOCATION_SUCCESS':
      return {
        ...state,
        loading: action.loadingCoords,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    case 'FETCH_GEOLOCATION_FAILURE':
      return {
        ...state,
        loading: action.loadingCoords,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    default:
      return state
  }
};

export default reducer;