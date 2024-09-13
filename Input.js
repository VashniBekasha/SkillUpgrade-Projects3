// src/components/Input.js
import React from 'react';

const Input = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            style={{ padding: '10px', margin: '5px' }}
        />
    );
};

export default Input;