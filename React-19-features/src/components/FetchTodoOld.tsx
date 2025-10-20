import { useState, useEffect } from 'react'

interface Todo {
    title: string;
}

const FetchTodoOld = () => {

    const [todo,setTodo] = useState<Todo | null>(null);
    const [loading,setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
                if(!res.ok) {
                    throw new Error("Network response was not ok");
                }
            
            const data : Todo = await res.json();
            setTodo(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    })

    if(loading) return <div>Loading...</div>

  return (
    <div>
        <h1>{todo?.title}</h1>
    </div>
  )
}

export default FetchTodoOld