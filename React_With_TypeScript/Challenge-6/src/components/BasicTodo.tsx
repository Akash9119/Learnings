import { useState } from 'react'

type TodoListType = {
    id: number;
    task: string;
    completed: boolean;
}

const BasicTodo = () => {
    const [todos, setTodos] = useState<TodoListType[]>([]);
    const [taskName, setTaskName] = useState<string>('');

    const updateTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName (e.target.value);
    }

    const addToList = () => {
        const newTodo = {
            id: todos.length + 1,
            task: taskName,
            completed: false,
        }

        setTodos([...todos, newTodo]);
    }
  return (
    <div>
        <h1>Basic Todo App</h1>
        <input type="text" value={taskName} onChange={updateTaskName} />
        <button onClick={addToList}>Add Todo</button>
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>The Taks is: {todo.task} and the completed status is {todo.completed}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default BasicTodo