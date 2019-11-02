import React, { useState } from 'react';
import { connect } from 'react-redux';
import './InputBox.scss';
import { addCityToQueue } from "../../actions";

const InputBox = ({ addCityToQueue }) => {
  const [ inputValue, setInputValue ] = useState('');

  const handleChange = (event) =>
    setInputValue(event.target.value);

  const clickButton = (event) =>{
    event.preventDefault();
    setInputValue('');
    addCityToQueue(inputValue);
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

export default connect( null, { addCityToQueue } )( InputBox );