// src/components/CounterWithInitialValue.js
import React, { useState } from 'react';
import Counter from './Counter';
import Input from './Input';

const CounterWithInitialValue = () => {
    const [initialValue, setInitialValue] = useState(0);
    const [count, setCount] = useState(0);

    const handleInputChange = (e) => setInitialValue(Number(e.target.value));

    const setCounterValue = () => setCount(initialValue);

    return (
        <div>
            <Input value={initialValue} onChange={handleInputChange} />
            <Button onClick={setCounterValue}>Set Initial Value</Button>
            <Counter initialCount={count} />
        </div>
    );
};

export default CounterWithInitialValue;