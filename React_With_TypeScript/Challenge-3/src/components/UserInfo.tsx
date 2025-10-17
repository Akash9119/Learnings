import { type Info } from "../types"

type UserInformation = {
    user: Info;
}

const UserInfo : React.FC<UserInformation> = ({user}) => {
  return (
    <div>
        <h2>User Infromation</h2>
        <p>ID : {user.id}</p>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
    </div>
  )
}

export default UserInfo