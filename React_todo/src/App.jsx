import React, {useEffect, useState} from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App = () => {

  const [todo, setTodo] = useState(() => {
    const todosString = localStorage.getItem("todos");
    try {
      return todosString ? JSON.parse(todosString) : [];
    } catch {
      return [];
    }
  });

  const createTodo = (todo) => {
    setTodo((prev) => [...prev, {id: Date.now(), ...todo}])
  }


  const updateTodo = (id, updatedFields) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...updatedFields } : prevTodo
      )
    );
  }

  const deleteTodo = (id) => {
    setTodo( (prev) => prev.filter((prevTodo) => prevTodo.id !== id) )
  }

  const toggleTodo = (id) => {
    setTodo( (prev) => prev.map((prevTodo) => prevTodo.id === id ? {
      ...prevTodo, completed: !prevTodo.completed
    } : prevTodo) )
  }


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo])
  

  return (
    <TodoProvider value={{todo, createTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((todo) => (
              <div className="w-fill" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};


export default App;
