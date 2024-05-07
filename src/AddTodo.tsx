import React, { FormEventHandler, ChangeEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {addTodo} from './features/todoListSlice';
import {click, ItemState} from './features/itemSlice';

// This component will provide a form to add new todos.
// In the AddTodo component, you can handle the form submission event to add a new todo to the list. 
// TODO: Remove 'name:' from useState and 'todo:' from setFormState

export default function AddTodo() {
    const [formState, setFormState] = useState({name: ''});

    // const selector = useAppSelector(selectItem);
    const dispatch = useAppDispatch();

    // const handleChange = (event: ChangeEventHandler<HTMLInputElement>) => {
    //     setFormState({...formState, [event.name]: event);
    // };
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(formState.name);
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTodo: ItemState = {text: formState.name, completed: false};
        dispatch(addTodo(newTodo));
        console.log(formState);
        // console.log(todos)
        setFormState({ name: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Todos: 
                <input type="text" name="name" value={formState.name} onChange={handleChange}></input>
                {/* <input type="text" name="todo" value={formState.name}></input> */}
                {/* <input type="text" name="todo"></input> */}
            </label>
            <button type="submit">Add todo</button>
        </form>
    )
}