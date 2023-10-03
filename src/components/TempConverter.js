import React, { useState } from 'react';
import InputBox from './InputBox';
import ConvertedResult from './ConvertedResult';
import "./index.css"

function TempConverter() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');
  const [convertedtemp, setConvertedTemp] = useState('');
  const [show , setShow]= useState(false);

  const convertTemp = () => {
      
    if (!temperature) {
      alert('Enter a valid temperature.');
      return ;
    } else {
        setShow(true);
    }

    const temp = parseFloat(temperature);

    if (isNaN(temp)) {
      alert('Invalid temperature. Please enter a valid number.');
      return;
    }else {
        setShow(true);
    }

    if (unit === 'celsius') {
      const fahrenheit = (temp * 9/5) + 32;
      const kelvin = temp + 273.15;
      setConvertedTemp(`Fahrenheit: ${fahrenheit.toFixed(2)}°F, Kelvin: ${kelvin.toFixed(2)}K`);
    } else if (unit === 'Fahrenheit') {
      const celsius = (temp - 32) * 5/9;
      const kelvin = (temp - 32) * 5/9 + 273.15;
      setConvertedTemp(`Celsius: ${celsius.toFixed(2)}°C, Kelvin: ${kelvin.toFixed(2)}K`);
    } else if (unit === 'Kelvin') {
      const celsius = temp - 273.15;
      const fahrenheit = (temp - 273.15) * 9/5 + 32;
      setConvertedTemp(`Celsius: ${celsius.toFixed(2)}°C , Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
    }
  };

  return (
    <>
    <div className="tempconvert">
      <h1>Temperature Converter</h1>
      <InputBox
        temperature={temperature}
        setTemperature={setTemperature}
        unit={unit}
        setUnit={setUnit}
      />
      <button onClick={convertTemp}>Convert Temperature</button>
     
   {show && ( <div className='result-wrapper'>
      <ConvertedResult Result={convertedtemp} />
      </div>)

   }
      </div>
    </>
  );
}

export default TempConverter;
