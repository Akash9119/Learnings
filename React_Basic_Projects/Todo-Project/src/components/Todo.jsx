import React from 'react'
import { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const addTodoItem = () => {
        setTodo((todo) => {
            return todo.concat({
                text: inputVal,
                id: Math.floor(Math.random() *100),
            })
        })
        setInputVal("");
    }

    const removeTodo = (id) => {
        setTodo(todo => todo.filter((t) => t.id !== id)); 
    }

  return (
    <div className='container'> 
        <h1>Todos</h1>

        <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button onClick={addTodoItem}>Submit Todo</button>


        <div className='todos-list'>
            {todo.map((item) => (
                <li className='todo' key={item.id}>
                    <span>{item.text}</span>
                    <button className='close' onClick={() => removeTodo(item.id)}>x</button>
                </li>
            ))
            }
        </div>
    </div>
  )
}

export default Todo