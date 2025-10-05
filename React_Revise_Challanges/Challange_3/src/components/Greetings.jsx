import React from 'react'

const greetingMessage = "Hello, welcome to My website!";
const Name = "Akash Vasava";

const CurrentDate = new Date();

const Greetings = () => {
  return (
    <div>
        <h1>{greetingMessage} and I am {Name}</h1>
        <p>{CurrentDate.toLocaleDateString()}</p>
    </div>
  )
}

export default Greetings