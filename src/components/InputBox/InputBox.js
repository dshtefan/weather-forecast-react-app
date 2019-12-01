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
    <div className="search">
      <form className="input-form">
        <input
          className="input-field"
          onChange={handleChange}
          value={ inputValue }
        />
        <button
          className="search-button"
          onClick={clickButton}
        >
          Search
        </button>
      </form>
    </div>
  )
};

export default connect( null, { addCityToQueue } )( InputBox );