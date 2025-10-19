import { type UInfo } from "./UserInfo"

type AInfo = UInfo & {
    role: string;
}

const AdminInfo = ({name, email, age, location, role} : AInfo) => {
  return (
    <div>
        <h3>Admin Name: {name}</h3>
        <p>Admin Email: {email}</p>
        <p>Admin Age: {age}</p>
        <p>Admin Location: {location.join(', ')}</p>
        <p>Admin Role: {role}</p>
    </div>
  )
}

export default AdminInfo