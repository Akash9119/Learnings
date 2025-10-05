import React from 'react'

const UserState = (props) => {
  return (
    <div>
        {
            props.isLoggedIn && props.isAdmin ? (
                <h1>Welcome Admin</h1>
            ) : <p>An Error Occured</p>
        }
    </div>
  )
}

export default UserState