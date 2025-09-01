import React, {useState} from 'react'

const App = () => {
  const [color, setColor] = useState('bg-black');

  let colorRed = () => {
    setColor('red');
  }

  let colorBlack = () => {
    setColor('black');
  }

  let colorWhite = () => {
    setColor('white');
  }

  let colorGreen = () => {
    setColor('green');
  }

  let colorGray = () => {
    setColor('gray');
  }
  return (
    <>
    <div className='h-screen text-white flex items-end justify-center' style={{backgroundColor: color}}>
      <div className='flex justify-center gap-6 mb-20 bg-gray-500 p-10 rounded-xl'>
        <button onClick={colorRed} className='bg-red-800 rounded-full px-12 py-3 cursor-pointer'>Red</button>
        <button onClick={colorBlack} className='bg-black rounded-full px-12 py-3 cursor-pointer'>Black</button>
        <button onClick={colorWhite} className='bg-white text-black rounded-full px-12 py-3 cursor-pointer'>White</button>
        <button onClick={colorGreen} className='bg-green-700 rounded-full px-12 py-3 cursor-pointer'>Green</button>
        <button onClick={colorGray} className='bg-gray-800 rounded-full px-12 py-3 cursor-pointer'>Gray</button>
      </div>
    </div>
    </>
  )
}

export default App