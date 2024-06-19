import { FormEventHandler, ChangeEventHandler, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {addTodo, logAndAddTodo} from '../List/todoListSlice';
import ItemState from '../Item/itemSlice';
import store from '../../app/store';

// This component will provide a form to add new todos.
// In the AddTodo component, you can handle the form submission event to add a new todo to the list. 
export default function AddTodo() {
    const currentDate = new Date();
    const [formState, setFormState] = useState({name: '', 
            month: currentDate.getMonth()+1, 
            day: currentDate.getDate(), 
            year: currentDate.getFullYear(),
            description: ''});

    const dispatch = useAppDispatch();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(formState.name);
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formattedDate = new Date(formState.year, formState.month-1, formState.day);
        console.log(formattedDate);
        // dispatch(addTodo(formState.name, false, formattedDate, formState.description));
        const todoItem = {id: '', name: formState.name, completed: false, dueDate: formattedDate, description: formState.description}
        console.log('Before logAndAddTodo');
        try {
            console.log('Before logAndAddTodo');
            store.dispatch(logAndAddTodo(todoItem));
            console.log('After logAndAddTodo');
        } catch (error) {
            console.error('Error dispatching logAndAddTodo:', error);
        }
        console.log('After logAndAddTodo');
        console.log(formState);
        setFormState({ name: '', 
            month: currentDate.getMonth()+1, 
            day: currentDate.getDate(), 
            year: currentDate.getFullYear(),
            description: ''});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <br></br>name:
                <input type="text" name="name" value={formState.name} onChange={handleChange}>
                </input>month:
                <input type="number" name="month" value={formState.month} onChange={handleChange}>
                </input>day:
                <input type="number" name="day" value={formState.day} onChange={handleChange}>
                </input>year:
                <input type="number" name="year" value={formState.year} onChange={handleChange}>
                </input>
                <br></br>
                description:
                <input type="text" name="description" value={formState.description} onChange={handleChange}>
                </input>
            </label>
            <button type="submit">Add todo</button>
        </form>
    )
}
