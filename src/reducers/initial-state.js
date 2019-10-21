const localState = () => JSON.parse(localStorage.getItem('state'));

const initialState =
  localState()
    ? localState()
    : {
      apiKey: '3dd82107b17241c740a2a087d34da02d',
      inputField: null,
      cities: [],
      loading: true,
      isGeoPosAvailable: null,
      cityDefault: 'Moscow',
      cityByCoords: {}
    };

export default initialState;