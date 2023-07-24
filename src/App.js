import React, { useState } from 'react';
import Toggle from "react-toggle";
import { useMediaQuery } from "react-responsive";
import './App.css';


const App = () => {
  const [input, setInput] = useState('');
  const [, setInput1] = useState('');
  const [result, setResult] = useState('');
  let isDark = false;

  const setIsDark = () => {
    isDark = !isDark;
    console.log(isDark);
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        
        setResult(eval(input).toString());
        setInput ('')
      } catch (error) {
        setResult('Erro');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div>
      <div className='dark-block'>
        <div className='dark-toggle'>
          <input type="checkbox" id="switch"
          onChange={({ target }) => setIsDark(target.checked)} /><label for="switch">Dark Mode</label>
        </div>
      </div>
<div className='container'>
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
      
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
    <div className='lgbtq'>
    </div>
    </div>
    </div>
    
  );
};

export default App;
