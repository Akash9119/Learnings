import { Suspense } from "react"
import FetchTodoNew from "./components/FetchTodoNew"
import FetchTodoOld from "./components/FetchTodoOld"
import Form from "./components/Form"
import Counter from "./components/Counter"


const App = () => {
  return (
    <Suspense>
      <FetchTodoOld />
      <FetchTodoNew />
      <Form />
      <Counter />
    </Suspense>
  )
}

export default App