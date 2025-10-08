import React, { useContext } from 'react'
import { userContext } from '../UserContext'
import UpdateUser from './UpdateUser'

const UserProfile = () => {
  const [user] = useContext(userContext);
  return (
    <div>
      <h1>User profile</h1>
      <p>User name is: {user.name}</p>
      <UpdateUser />
    </div>
  )
}

export default UserProfile