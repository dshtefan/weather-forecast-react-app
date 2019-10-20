import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './input-box.scss';
import { updateInputField } from "../../actions";

const InputBox = ({ inputField, updateInputField }) => {
  useEffect(() => {
    console.log(inputField);
  }, [inputField]);
  return (
    <div id="input-box-main">
      <div id="input-box">
        <form id="input-form" action="#">
          <input
            id="input-field"
            onChange={(e) => updateInputField(e.target.value)}
            value={ inputField }
          />
          <button id="search-button">Search</button>
        </form>
      </div>
    </div>
  )
};

const mapStateToProps = ({ inputField }) => ({
  inputField
});

const mapDispatchToProps = {
  updateInputField
};

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);