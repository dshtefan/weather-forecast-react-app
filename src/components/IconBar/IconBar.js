import React from 'react';
import './IconBar.scss';
import updIcon from './svg/update.svg';
import errIcon from './svg/err.svg';

const IconBar = ({ locRequested, errorMessage }) => {
  return (
    <div className="icon-bar">
      <div className="icons">
        <img className="navIcon" src={updIcon} alt=""  onClick={() => locRequested()} />
        {errorMessage ? <img className="errIcon" src={errIcon} alt="" /> : null}
        {errorMessage ? <div className="error-text">{errorMessage}</div> : null}
      </div>
    </div>
  )
};

export default IconBar;