import React from 'react';

import {removeCompletedTodos, click, selectList} from './todoListSlice';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ItemState, getCompleted, clickViewItem } from '../Item/itemSlice';
import { Link } from 'react-router-dom'
import AddTodo from '../Item/AddTodo';


// This component will render the list of todos
// //TODO: Implement clear completed items button to clear strikethroughed items
const TodoList: React.FC = () => {
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
                {todos.map((todo) => 
                <>
                    <li
                        key={todo.id}
                        style={{ textDecoration: completed(todo) ? 'line-through' : 'none' }}
                        onClick={() => dispatch(click(todo))}
                    >
                        <p>Todo Item: {todo.name} &emsp;&emsp;&emsp; Todo Date: {todo.dueDate?.toDateString()} &emsp;&emsp;&emsp;</p>                        
                    </li>
                    <Link to={`/todoList/${todo.id}`} onClick={() => dispatch(clickViewItem(todo))}>
                        View Item
                    </Link>
                </>
            )}
            </ol>
            <br></br>
            <AddTodo></AddTodo>
            <button onClick={() => dispatch(removeCompletedTodos())}>
                Clear Completed Items
                </button>
        </>
    );
}
export default TodoList;