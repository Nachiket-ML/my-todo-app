import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {addTodo} from './features/todoListSlice.ts'
import {click, ItemState, selectCompleted} from './features/itemSlice';

// This component will provide a form to add new todos.
// In the AddTodo component, you can handle the form submission event to add a new todo to the list. 
// TODO: Remove 'name:' from useState and 'todo:' from setFormState

export default function AddTodo({todos}) {
    const [formState, setFormState] = useState({name: ''});

    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = formState.todo;
        addTodo(newTodo);
        console.log(formState);
        console.log(todos)
        setFormState({ todo: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Todos: 
                <input type="text" name="todo" value={formState.todo} onChange={handleChange}></input>
            </label>
            <button type="submit">Add todo</button>
        </form>
    )
}
// export default function AddTodo({onAddTodo, todos}) {
//     const [formState, setFormState] = useState({name: ''});

//     const handleChange = (event) => {
//         setFormState({...formState, [event.target.name]: event.target.value});
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newTodo = formState.todo;
//         console.log(formState);
//         onAddTodo(newTodo);
//         console.log(todos)
//         setFormState({ todo: '' });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Add Todos: 
//                 <input type="text" name="todo" value={formState.todo} onChange={handleChange}></input>
//             </label>
//             <button type="submit">Add todo</button>
//         </form>
//     )
// }