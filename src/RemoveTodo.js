import React, { useState } from 'react';


export default function RemoveTodo({onRemoveTodo, todos}) {
    const [formState, setFormState] = useState({name: ''});

    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const oldTodo = formState.todo;
        if (todos.length > 0 && todos.includes(oldTodo)) {
            onRemoveTodo(oldTodo);
        }
        console.log(formState);
        console.log(todos)
        setFormState({ todo: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Remove Todo: 
                <input type="text" name="todo" value={formState.todo} onChange={handleChange}></input>
            </label>
            <button type="submit">Remove todo</button>
        </form>
    )
}