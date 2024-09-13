// src/App.js
import React from 'react';
import CounterWithInitialValue from './components/CounterWithInitialValue';

const App = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Reusable Components with State Management</h1>
            <CounterWithInitialValue />
        </div>
    );
};

export default App;