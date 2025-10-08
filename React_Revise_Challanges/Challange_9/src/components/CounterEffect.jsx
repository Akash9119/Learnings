import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [counter, setCounter] = useState(0)

    const updateCounter = () => {
        setCounter(counter + 1)
       }

    useEffect(() => {
       console.log("Effect ran on counter update");
       document.title = `Count: ${counter}`
    }, [updateCounter])
    

  return (
    <div>
        <h2>Update Counter</h2>
        <div>{counter}</div>
        <button onClick={updateCounter}>Add 1</button>
    </div>
  )
}

export default CounterEffect