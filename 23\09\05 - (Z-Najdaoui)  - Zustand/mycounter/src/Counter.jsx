import React from 'react';
import useStore from './store';

const Counter = () => {
    const { count, increment, decrement } = useStore();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
