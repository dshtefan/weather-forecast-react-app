const initialState = {
  cities: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'CITIES_LOADED':
      return {
        cities: action.payload
      }
  }
  return state
}

export default reducer