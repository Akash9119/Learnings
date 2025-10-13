import Button from './components/Button'

const App = () => {
  return (
    <div>
      <Button lable="Click" onClick={() => console.log('Clicked')} disabled={false} />
    </div>
  )
}

export default App