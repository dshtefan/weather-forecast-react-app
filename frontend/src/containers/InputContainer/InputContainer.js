import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCityToQueue } from "../../actions";
import Input from "../../components/Input";

const InputContainer = ({ addCityToQueue }) => {
  const [ inputValue, setInputValue ] = useState('');

  const handleChange = (event) =>
    setInputValue(event.target.value);

  const clickButton = (event) =>{
    event.preventDefault();
    setInputValue('');
    if (inputValue !== '')
      addCityToQueue(inputValue);
  };

  return <Input inputValue={inputValue} handleChange={handleChange} clickButton={clickButton} />;
};

export default connect( null, { addCityToQueue } )( InputContainer );