import React from 'react'
import Weather from './components/Weather'
import UseerState from './components/UserState'
import Greetings from './components/Greetings'

const App = () => {
  return (
    <div>
      <Weather temprature={30}/>
      <UseerState isLoggedIn={true} isAdmin={true} />
      <Greetings timeOfDay="Morning" />
    </div>
  )
}

export default App