import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './input-box.scss';

import { updateInputField } from "../../actions";

const InputBox = ({ inputField, updateInputField }) => {
  const [ inputValue, setInputValue ] = useState('');

  useEffect(() => {
    console.log(inputField);
  }, [inputField]);

  const handleChange = (event) =>
    setInputValue(event.target.value);

  const clickButton = (event) =>{
    event.preventDefault();
    updateInputField(inputValue);
  };

  return (
    <div id="input-box-main">
      <div id="input-box">
        <form id="input-form">
          <input
            id="input-field"
            onChange={handleChange}
            value={ inputValue }
          />
          <button
            id="search-button"
            onClick={clickButton}
          >
            Search
          </button>
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