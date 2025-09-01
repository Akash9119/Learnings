import React, { useState } from 'react'

const App = () => {
  const [Counter, setCounter] = useState(0)

  let IncreseCounter = () => {
    setCounter(Counter + 1)
  }

  let DecreseCounter = () => {
    if (Counter > 0) {
      setCounter(Counter - 1)
    }
    console.log(Counter)
  }
  return (
    <div className='flex justify-center flex-col gap-4 items-center h-screen bg-black text-white'>
      <h1 className='text-3xl'>Counter Increse or Decrese but will not go in negative</h1>
      <p>{Counter}</p>
      <button onClick={IncreseCounter} className='bg-gray-600 border-2 rounded-xl px-12 py-4 cursor-pointer border-gray-800'>Increse Counter</button>
      <button onClick={DecreseCounter} className='bg-gray-600 border-2 rounded-xl px-12 py-4 cursor-pointer border-gray-800'>Decrese Counter</button>
    </div>
  )
}

export default App;