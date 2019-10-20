const initialState = {
  apiKey: '',
  cities: [],
  frontCity: 0,
  loadingCoords: true,
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
    default:
      return state
  }
};

export default reducer;