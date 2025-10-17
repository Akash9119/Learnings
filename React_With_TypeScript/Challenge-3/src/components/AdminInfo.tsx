import { type AdminInformation } from "../types"

type AdminInfoType = {
    admin: AdminInformation;
}
const AdminInfo : React.FC<AdminInfoType> = ({admin}) => {
  return (
    <div>
        <h2>Admin Information</h2>
        <p>Admin ID: {admin.id}</p>
        <p>Admin Name: {admin.name}</p>
        <p>Admin Email: {admin.email}</p>
        <p>Admin Role: {admin.role}</p>
        <p>Admin Last Login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo