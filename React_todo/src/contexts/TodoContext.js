import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo: [{
        id: 1,
        todo: "Learn React",
        completed: false,
    }],
    createTodo: () => {todo},
    updateTodo: () => {id, todo},
    deleteTodo: () => {id},
    toggleTodo: () => {completed},
});


export const useTodo = () => useContext(TodoContext);


export const TodoProvider = TodoContext.Provider;