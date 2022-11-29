import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

export const useTodos = () => {
  
    const [ todos, dispatch] = useReducer( todoReducer, initialState ); //el init iria al lado del initialState pero a mi no me funciona

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action ); // dispatch es la función que va a enviar la acción
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })

    } 
    
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
    

}
