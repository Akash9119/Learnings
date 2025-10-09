import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count -1);
  }
  return (
    <div className='container'>
      <div>
        <h1 className='number' >{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={incrementCount} className="increment">+</button>
        <button onClick={decrementCount} className="increment">-</button>
      </div>
    </div>
  )
}

export default Counter