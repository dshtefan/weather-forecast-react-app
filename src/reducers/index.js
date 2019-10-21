const initialState = JSON.parse(localStorage.getItem('state'))
  ? JSON.parse(localStorage.getItem('state'))
  : {
    apiKey: '3dd82107b17241c740a2a087d34da02d',
    inputField: null,
    cities: [],
    loading: true,
    isGeoPosAvailable: null,
    cityDefault: 'London',
    cityByCoords: {}
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
    case 'UPDATE_LOADING_STATUS':
      return {
        ...state,
        loading: action.loading
      };
    case 'DELETE_CITY':{
      const cities = [...state.cities];
      cities.splice(action.index, 1);
      return {
        ...state,
        cities
      };
    }
    case 'FETCH_CITY_REQUEST':{
      const cities = [...state.cities];
      cities.unshift({});
      return {
        ...state,
        cities
      }
    }
    case 'FETCH_CITY_SUCCESS':{
      const cities = [...state.cities];
      cities[0] = action.city;
      return {
        ...state,
        cities
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
        isGeoPosAvailable: action.isGeoPosAvailable,
        loading: true
      };
    case 'FETCH_GEOLOCATION_SUCCESS':
      return {
        ...state,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    case 'FETCH_GEOLOCATION_FAILURE':
      return {
        ...state,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    case 'FETCH_CITY_BY_COORDS_SUCCESS':{
      return {
        ...state,
        cityByCoords: action.city
      }
    }
    default:
      return state
  }
};

export default reducer;