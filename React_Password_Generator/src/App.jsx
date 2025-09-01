import React from 'react'

const App = () => {
  return (
    <div className='bg-black text-white h-screen flex justify-center items-center p-24'>
      <div className='bg-gray-800 rounded-xl p-4'>
      <div>
        <input type="text" className='bg-white text-black rounded-full p-3 m-6 w-[calc(100%-200px)]' disabled />
        <button className='bg-gray-600 border-2 border-gray-800 px-8 py-2 rounded-full cursor-pointer hover:bg-gray-700'>Copy</button>
      </div>
      <div className='flex flex-row gap-5'>
        <input type="range" name="range" id="range" />
        <label htmlFor='range'>Length : 10</label>

        <input type="checkbox" name="NumberAllowed" id="NumberAllowed" />
        <label htmlFor="NumberAllowed">Numbers Allowed</label>

        <input type="checkbox" name="CharactersAllowed" id="CharactersAllowed" />
        <label htmlFor="CharactersAllowed">Characters Allowed</label>
        </div>
      </div>
    </div>
  )
}

export default App