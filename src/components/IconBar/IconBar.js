import React from 'react';
import './IconBar.scss';
import updIcon from './svg/update.svg';
import errIcon from './svg/err.svg';
import {connect} from "react-redux";
import {locRequested} from "../../actions";

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

export default connect(({errorMessage}) => ({errorMessage}), { locRequested })(IconBar);