import React, { useReducer, useState } from 'react'

const initialState = {counter: 0};

const method = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + 1};
            break;
        case 'decrement':
            return {...state, counter: state.counter -1};
            break;
        case 'reset':
            return {...state, counter: 0};
            break;
        case 'incrementCustom':
            return {...state, counter: state.counter + parseInt(action.payload)};
            break;
        case 'decrementCustom':
            return {...state, counter: state.counter - parseInt(action.payload)};
            break;
        default:
            break;
    }
}


const CounterReducer = () => {
    const [number, setNumber] = useState(0);
    const [state, dispatch] = useReducer(method, initialState);
    const incrementCustom = () => {
        dispatch({type: 'incrementCustom', payload: number});
    }
    
    const decrementCustom = () => {
        dispatch({type: 'decrementCustom', payload: number});
    }
  return (
    <div>
        <h2>Count is : {state.counter}</h2>

        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        <input type="Custom-increment" value={number} onChange={(e) => {setNumber(e.target.value)}} />
        <button onClick={incrementCustom}>Add Custom Value</button>

        <input type="Custom-decrement" value={number} onChange={(e) => {setNumber(e.target.value)}} />
        <button onClick={decrementCustom}>Remove Custom Value</button>
    </div>
  )
}

export default CounterReducer