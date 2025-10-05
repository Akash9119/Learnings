import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Person name="Akash" age={25} />
      <Product name="Mobile" price={55000} />
    </div>
  )
}

export default App