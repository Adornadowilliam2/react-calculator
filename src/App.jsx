import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(buttonValue)) {
      if (operators.includes(value.slice(-1))) return;
    }

    
    if (buttonValue == '.') {
      if (value.includes('.') && !operators.includes(value.slice(-1))) return;
    }

    setValue(value + buttonValue);
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(value);
      setValue(String(result));
    } catch (error) {
      setValue('Error');
    }
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className='display'>
              <input type="text" value={value} readOnly />
            </div>
            <div>
              <input type="button" value="AC" onClick={handleClear} />
              <input type="button" value="DE" onClick={handleDelete} />
              <input type="button" value="." onClick={() => handleButtonClick('.')} />
              <input type="button" value="/" onClick={() => handleButtonClick('/')} />
            </div>
            <div>
              <input type="button" value="7" onClick={() => handleButtonClick('7')} />
              <input type="button" value="8" onClick={() => handleButtonClick('8')} />
              <input type="button" value="9" onClick={() => handleButtonClick('9')} />
              <input type="button" value="*" onClick={() => handleButtonClick('*')} />
            </div>
            <div>
              <input type="button" value="4" onClick={() => handleButtonClick('4')} />
              <input type="button" value="5" onClick={() => handleButtonClick('5')} />
              <input type="button" value="6" onClick={() => handleButtonClick('6')} />
              <input type="button" value="-" onClick={() => handleButtonClick('-')} />
            </div>
            <div>
              <input type="button" value="1" onClick={() => handleButtonClick('1')} />
              <input type="button" value="2" onClick={() => handleButtonClick('2')} />
              <input type="button" value="3" onClick={() => handleButtonClick('3')} />
              <input type="button" value="+" onClick={() => handleButtonClick('+')} />
            </div>
            <div>
              <input type="button" value="00" onClick={() => handleButtonClick('00')} />
              <input type="button" value="0" onClick={() => handleButtonClick('0')} />
              <input type="button" value="=" className='equal' onClick={handleCalculate} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;