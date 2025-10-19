import { useState } from 'react'

type UserInformation = {
    name: string;
    age: number;
    email: string;
}

const UserInfo = () => {
    const [userDetails, setUserDetails] = useState<UserInformation>(
        {
            name: 'John Doe',
            age: 30,
            email: 'john@test.com'
        }
    )

    const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({
            ...userDetails, name: e.target.value
        })
    }

    const updateUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({
            ...userDetails, age: Number(e.target.value)
        })
    }

    const updateUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({
            ...userDetails, email: e.target.value
        })
    }

  return (
    <div>
        <h1>This is a UserInfo Component with TypeScript</h1>
        <input type="text" placeholder='Type Name' value={userDetails.name} onChange={updateUserName} />

        <input type="number" name="age" value={userDetails.age} onChange={updateUserAge} />

        <input type="email" name="email" value={userDetails.email} onChange={updateUserEmail} />


        <h4>User Details</h4>
        <p>Name: {userDetails.name}</p>
        <p>Age: {userDetails.age}</p>
        <p>Email: {userDetails.email}</p>
    </div>
  )
}

export default UserInfo