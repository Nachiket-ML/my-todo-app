import React, { useState } from 'react';

// This component will render the list of todos
import TodoItem from './TodoItem';

//TODO: Implement clear completed items button to clear strikethroughed items
export default function TodoList({todos, setTodos}) {
    //List of strikethroughed items
    const [clickedItems, setClickedItems] = useState([]);
    // const [isStrikeThrough, setIsStrikeThrough] = useState(false); 

    console.log(todos);

    //Clears clicked items from TodoList
    const clearCompletedItems = () => {
        // event.preventDefault();
        setTodos((todos) => todos.filter(function(element) {
            return !clickedItems.includes(element);
        }));
        setClickedItems([{}]);
    }
    return (
        <>
            <h1>Todo List</h1>
            <ol> 
                {todos.map((todo) => TodoItem(todo, clickedItems, setClickedItems))}
            </ol>
            <br></br>
            <button onClick={clearCompletedItems}>Clear Completed Items</button>
        </>
    );
}