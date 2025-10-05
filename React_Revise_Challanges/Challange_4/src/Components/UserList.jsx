import React from 'react'

const users = [
    {
        id: 1,
        name: "Akash",
        age: 25
    },
    {
        id: 2,
        name: "Rohan",
        age: 24
    },
    {
        id: 3,
        name: "Sohan",
        age: 26
    }
]

const UserList = () => {
  return (
    <div>
        {
            users.map((users) => {
                return (
                    <ul key={users.id}>
                        <li>User Name: {users.name}</li>
                        <li>User Age: {users.age}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default UserList