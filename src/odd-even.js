import React, { useState } from 'react';

function NumberInput() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    const input = parseInt(inputValue);

    if (isNaN(input)) {
      setResult('Please enter a valid number.');
    } else if (input < 0) {
      setResult('Enter a positive value.');
    } else if (input % 2 === 0) {
      const evenNumbers = [input + 2, input + 4, input + 6];
      setResult(`Next 3 even numbers: ${evenNumbers.join(', ')}`);
    } else {
      const oddNumbers = [input + 2, input + 4, input + 6];
      setResult(`Next 3 odd numbers: ${oddNumbers.join(', ')}`);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleInputSubmit}>Submit</button>
      <div>{result}</div>
    </div>
  );
}

export default NumberInput;