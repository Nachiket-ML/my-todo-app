import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../../app/store'
import { ItemState } from '../Item/itemSlice'
import { nanoid } from '@reduxjs/toolkit'
import store from '../../app/store';
// import type { AppDispatch, RootState } from './store'
import axios from 'axios';

// Define a type for the slice state
export interface TodoListState {
    items: Array<ItemState>
}

// Define the initial state using that type
const initialState: TodoListState = {
    items: [],
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<ItemState>) => {
                console.log(action.payload)
                state.items.push(action.payload)
            },
            prepare(name: string, completed: boolean, dueDate: Date, description: string) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        completed,
                        dueDate,
                        description
                    }
                }
            }
        },
        removeCompletedTodos: (state) => {
            state.items = state.items.filter((item) => item.completed == false)
        },
        click: (state, action: PayloadAction<ItemState>) => {
            //strikethrough if true
            const todoItem = state.items.find(todo => todo.name == action.payload.name);
            console.log(todoItem);
            if (todoItem != null ) {
                todoItem.completed = !todoItem.completed;
                console.log(todoItem.completed);
            }
        }
    }
})

// export const logAndAddTodo = (todo: ItemState) => {
//     console.log("Start of logAndAddTodo");
//     return (dispatch: AppDispatch, getState: RootState) => {
//         const todoListBefore = getState
//         console.log(`Todo List Before: ${todoListBefore}`)
//         dispatch(addTodo(todo.name, todo.completed, todo.dueDate, todo.description))
//         const todoListAfter = getState
//         console.log(`Todo List After: ${todoListAfter}`)
//     }
// }

export const logAndAddTodo = (todo: ItemState) => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(addTodo(todo.name, todo.completed, todo.dueDate, todo.description))
    }, 5000)
}

export const { addTodo, click, removeCompletedTodos } = todoListSlice.actions

export const selectList = (state: RootState) => state.todoList.items 

export default todoListSlice.reducer