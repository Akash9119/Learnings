import './App.css'
import AdminInfo from './components/AdminInfo'
import UserInfo from './components/UserInfo'
import { type Info, type AdminInformation } from './types'
const App = () => {

  const user : Info = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com'
  }

  const admin : AdminInformation = {
    id: 1,
    name: 'Akash Vasava',
    email: 'akashj.vasava@gamil.com',
    role: 'admin',
    lastLogin: new Date()
  }

  return (
    <div>
      <AdminInfo admin={admin} />
      <UserInfo user={user} />
    </div>
  )
}

export default App