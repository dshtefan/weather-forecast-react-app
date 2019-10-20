import React, {useEffect} from 'react';
import { MainPage } from '../pages';
import { connect } from 'react-redux';
import { apiLoaded } from '../../actions'

import './app.scss';

const App = ({ apiKey, frontCity }) => {
  useEffect(() => {
    console.log(apiKey);
    console.log(frontCity);
    apiLoaded('3dd82107b17241c740a2a087d34da02d');
    console.log(frontCity);
    console.log(apiKey);
  }, [apiKey]);
  return (
    <div id={'app'}>
      <MainPage />
    </div>
  )
};

const mapStateToProps = ({ apiKey, frontCity }) => ({
  apiKey,
  frontCity
});

const mapDispatchToProps = {
  apiLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
