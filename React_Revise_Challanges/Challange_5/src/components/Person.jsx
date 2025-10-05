import React from 'react'

const Person = ({name, age}) => {
  return (
    <div>
        <h2>User Name is: {name}</h2>
        <p>{name}'s' age is {age}</p>
    </div>
  )
}

export default Person