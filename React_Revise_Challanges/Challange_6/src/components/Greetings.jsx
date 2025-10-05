import React from 'react'

const Greetings = ({timeOfDay}) => {
  return (
    <div>
        {
            (timeOfDay === "Morning" && <h1>Good Morning</h1>) ||
            (timeOfDay === "Afternoon" && <h1>Good Afternoon</h1>) ||
            (timeOfDay === "Evening" && <h1>Good Evening</h1>) ||
            (timeOfDay === "Night" && <h1>Good Night</h1>) ||
            <p>An Error Occured</p>
        }
    </div>
  )
}

export default Greetings