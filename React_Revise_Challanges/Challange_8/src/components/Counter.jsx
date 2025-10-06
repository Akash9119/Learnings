import React,{useState} from 'react'


const Counter = () => {
    const [number, setNumber] = useState(0);

    const updateNumber = () => {
        setNumber(number + 1);
    }

  return (
    <div>
        <h1>Counter Component</h1>
        <p>{number}</p>
        <button onClick={updateNumber}>Increase by 1</button>
    </div>
  )
}

export default Counter