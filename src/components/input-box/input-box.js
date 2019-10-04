import React from 'react'

import './input-box.scss'

const InputBox = () => {
  return (
    <div id="input-box-main">
      <div id="input-box">
        <form id="input-form" action="#">
          <input id="input-field"></input>
          <button id="search-button"></button>
        </form>
      </div>
    </div>
  )
}

export default InputBox