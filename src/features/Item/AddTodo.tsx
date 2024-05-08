import React, { FormEventHandler, ChangeEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {addTodo, selectList} from '../List/todoListSlice';
import {click, ItemState} from './itemSlice';
import { format, isToday, isThisWeek } from 'date-fns';
import { nanoid } from 'nanoid'

// This component will provide a form to add new todos.
// In the AddTodo component, you can handle the form submission event to add a new todo to the list. 
// TODO: Remove 'name:' from useState and 'todo:' from setFormState

export default function AddTodo() {
    const currentDate = new Date();
    const [formState, setFormState] = useState({name: '', 
            month: currentDate.getMonth()+1, 
            day: currentDate.getDate(), 
            year: currentDate.getFullYear()});

    const dispatch = useAppDispatch();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(formState.name);
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    // const handleMonthChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    //     console.log(formState.month);
    //     setFormState({...formState, [event.target.name]: event.target.value});
    // };

    // const handleDayChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    //     console.log(formState.day);
    //     setFormState({...formState, [event.target.day]: event.target.value});
    // };

    // const handleYearChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    //     console.log(formState.year);
    //     setFormState({...formState, [event.target.name]: event.target.value});
    // };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        // const dateStr = format();
        const formattedDate = new Date(formState.year, formState.month-1, formState.day);
        // const newTodo: ItemState = {id: nanoid(), text: formState.name, completed: false, dueDate: formattedDate};
        dispatch(addTodo(formState.name, formattedDate));
        console.log(formState);
        // const selector = useAppSelector(selectList);
        // console.log(useAppSelector(selectList));
        // console.log(todos)
        setFormState({ name: '', 
            month: currentDate.getMonth()+1, 
            day: currentDate.getDate(), 
            year: currentDate.getFullYear()});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Todos: 
                <br></br>name:
                <input type="text" name="name" value={formState.name} onChange={handleChange}></input>
                <br></br>month:
                <input type="text" name="month" value={formState.month} onChange={handleChange}></input>
                <br></br>day:
                <input type="text" name="day" value={formState.day} onChange={handleChange}></input>
                <br></br>year:
                <input type="text" name="year" value={formState.year} onChange={handleChange}></input>
                <br></br>

                {/* <input type="text" name="todo" value={formState.name}></input> */}
                {/* <input type="text" name="todo"></input> */}
            </label>
            <button type="submit">Add todo</button>
        </form>
    )
}