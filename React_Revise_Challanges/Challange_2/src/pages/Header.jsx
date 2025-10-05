import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='hello_text'>
        <h1>Welcome to My Website</h1>
      </div>
      <nav className='nav_bar'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  )
}

export default Header