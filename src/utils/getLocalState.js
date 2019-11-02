const getLocalState = () => {
  const state = JSON.parse( localStorage.getItem('state') );
  if (state === null)
    return null;
  const citiesQueue = state.cities.map( (city) => city.city );
  return { citiesQueue };
};

export default getLocalState;