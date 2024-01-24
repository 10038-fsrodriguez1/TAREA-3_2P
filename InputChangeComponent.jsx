import React, { useState } from 'react';

const InputChangeComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>Valor: {inputValue}</p>
        </div>
    );
};

export default InputChangeComponent;
