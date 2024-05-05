import React, { setFormState } from 'react';

// This component will provide a form to add new todos.
// In the AddTodo component, you can handle the form submission event to add a new todo to the list. 
function AddTodo(todos) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            id: todos.length + 1,
            text: formState.todo,
            completed: false
        };
        setTodos([...todos, newTodo]);
        setFormState({ todo: '' });
        setSubmitted(true);
        console.log(formState);
      };

    return (
        <form onSubmit='handleSubmit'>
            <label>Todo: 
                <input type="text" name="todo"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}