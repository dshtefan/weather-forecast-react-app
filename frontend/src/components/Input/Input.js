import React from 'react';
import './Input.scss';

const Input = ({ handleChange, inputValue, clickButton }) => (
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
);

export default Input;