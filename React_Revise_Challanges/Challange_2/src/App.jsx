import React from 'react'
import Header from './pages/Header'
import './app.css'
import Footer from './pages/Footer'
import MainComponent from './pages/MainComponent'

const App = () => {
  return (
    <div>
      <Header />
      <MainComponent  />
      <Footer />
    </div>
  )
}

export default App