import React, { useState } from 'react';

import {removeCompletedTodos, click, selectList} from './features/todoListSlice';

import TodoItem from './TodoItem';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { ItemState, getCompleted } from './features/itemSlice';
import { useSelector } from 'react-redux';
// This component will render the list of todos
// //TODO: Implement clear completed items button to clear strikethroughed items
export default function TodoList() {
    const todos = useAppSelector(selectList);
    const dispatch = useAppDispatch();

    const completed = (item: ItemState) => {
        const todoItem = todos.find(todo => todo == item);
        console.log(todoItem);
        if (todoItem != null) {
            console.log(todoItem.completed);
            return todoItem.completed;
        }
        return null;
    } 

    console.log(todos);

    //Clears clicked items from TodoList
    return (
        <>
            <h1>Todo List</h1>
            <ol> 
                {/* {todos.map((todo) => TodoItem(todo))} */}
                {todos.map((todo) => 
                <li
                    style={{ textDecoration: completed(todo) ? 'line-through' : 'none' }}
                    onClick={() => dispatch(click(todo))}
                >
                    {todo.text}
                </li>)}
            </ol>
            <br></br>
            <button onClick={() => dispatch(removeCompletedTodos())}>
                Clear Completed Items
                </button>
        </>
    );
}
// export default function TodoList({todos: [], setTodos}) {
//     //List of strikethroughed items
//     const [clickedItems, setClickedItems] = useState([]);
//     // const [isStrikeThrough, setIsStrikeThrough] = useState(false); 

//     console.log(todos);

//     //Clears clicked items from TodoList
//     const clearCompletedItems = () => {
//         // event.preventDefault();
//         setTodos((todos) => todos.filter(function(element) {
//             return !clickedItems.includes(element);
//         }));
//         setClickedItems([{}]);
//     }
//     return (
//         <>
//             <h1>Todo List</h1>
//             <ol> 
//                 {todos.map((todo) => TodoItem(todo, clickedItems, setClickedItems))}
//             </ol>
//             <br></br>
//             <button onClick={clearCompletedItems}>Clear Completed Items</button>
//         </>
//     );
// }