import './App.css'
import BasicTodo from './components/BasicTodo'
import Type from './components/Type'
import UserInfo from './components/UserInfo'


const App = () => {
  return (
    <div>
      <Type />
      <UserInfo />
      <BasicTodo />
    </div>
  )
}

export default App