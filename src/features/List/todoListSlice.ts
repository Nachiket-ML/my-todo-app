import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { ItemState } from '../Item/itemSlice'
import { nanoid } from '@reduxjs/toolkit'
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

export const { addTodo, click, removeCompletedTodos } = todoListSlice.actions

export const selectList = (state: RootState) => state.todoList.items

export const fetchTodos = createAsyncThunk<ItemState[]>(
    'todos/fetchTodos',
    async() => {
        const response = await axios.get<ItemState[]>('/api/todos');
        return response.data;
    }
)

export default todoListSlice.reducer