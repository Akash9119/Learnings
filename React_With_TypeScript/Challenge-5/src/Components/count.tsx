import { useState } from 'react'

const count = () => {

    const [count, setCount] = useState<number>(0);

  return (
    <div>
        <h1>Counter</h1>
        <h2>The Count is: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default count