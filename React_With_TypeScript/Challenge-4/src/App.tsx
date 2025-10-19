import './App.css'
import UserInfo from './Components/UserInfo'
import AdminInfo from './Components/AdminInfo'

const App = () => {
  return (
    <div>
      <h1>User Info</h1>
      <UserInfo name="Akash" email="akashj.vasava@gamil.com" age={25} location={['Eanth', 'India']} />

      <h1>Admin Info</h1>
      <AdminInfo name="Admin Akash" email="adminakash@gmail.com" age={25} location={['Mars', 'Hidden']} role="admin" />
    </div>
  )
}

export default App