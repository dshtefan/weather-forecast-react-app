const initialState = {
  cities: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'CITIES_LOADED':
      return {
        cities: action.payload
      };
    default:
      return state
  }
};

export default reducer;