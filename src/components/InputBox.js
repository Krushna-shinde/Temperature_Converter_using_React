import React from 'react';
import "./index.css"


function InputBox({ temperature, setTemperature, unit, setUnit }) {
  return (
    <div className='input'>
      <input
        type='text' placeholder='Enter a Temperature' value={temperature}  onChange={(e) => setTemperature(e.target.value)}
      />
      <select className='selectbtn' value={unit}onChange={(e) => setUnit(e.target.value)}>
        <option value='Celsius'>Celsius</option>
        <option value='Fahrenheit'>Fahrenheit</option>
        <option value='Kelvin'>Kelvin</option>
      </select>
    </div>
  );
}

export default InputBox;
