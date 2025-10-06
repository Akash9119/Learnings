import React, { useState } from 'react'

const Profile = () => {

    const [user, setUser] = useState({})
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState(0)

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updateUserAge =  (e) => {
        setUserAge(e.target.value);
    }

    const updateUser = () => {
        const newUser = {name: userName, age: userAge};
        console.log(newUser)
        setUser(newUser);
    }

  return (
    <div>

        <h2>Profile Component</h2>
        <div>
            {
                user.name && <p>Name: {user.name} Age: {user.age}</p>
            }
        </div>
        <input type="text" placeholder='John Doe' onChange={updateUserName} />
        <input type="number" placeholder='age' onChange={updateUserAge} />
        <button onClick={updateUser}>Add a user</button>
    </div>
  )
}

export default Profile