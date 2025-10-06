import React from 'react'
import StyleCard from './components/StyleCard'
import ProfileCard from './components/ProfileCard'
import IconComponent from './components/IconComponent'

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column' , gap: '20px' , justifyContent: 'space-around', marginTop: '50px'}}>
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </div>
  )
}

export default App