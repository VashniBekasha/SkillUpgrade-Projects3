// src/components/Button.js
import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} style={{ padding: '10px', margin: '5px' }}>
            {children}
        </button>
    );
};

export default Button;

