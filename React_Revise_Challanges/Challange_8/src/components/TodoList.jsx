import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [todoMessage, setTodoMessage] = useState("")

    const updateMessage = (e) => {
        setTodoMessage(e.target.value);
    }
    
    const updateTodo = () => {
        const newTodo = todoMessage;
        setTodos([...todos, newTodo]);
    }

  return (
    <div>
        <h2>Todo Items</h2>
        <div>
            {
                todos.map((todo, index) => (
                    <div key={index}>{todo}</div>
                ))
            }
        </div>
        <input type="text" onChange={updateMessage} />
        <button onClick={updateTodo}>Add item to list</button>
    </div>
  )
}

export default TodoList