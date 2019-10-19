import React from 'react';

import './spinner.scss';

const Spinner = () =>
  <div className="lds-css ng-scope">
    <div className="lds-eclipse">
      <div></div>
    </div>
  </div>;

export default Spinner;