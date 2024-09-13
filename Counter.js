// src/components/Counter.js
import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    );
};

export default Counter;