import React, { useState } from 'react';

const ClickHandlerComponent = () => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Botón clickeado!');
    };

    return (
        <div>
            <button onClick={handleClick}>Haz clic aquí</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ClickHandlerComponent;
