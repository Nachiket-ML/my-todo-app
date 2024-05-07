import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { ItemState } from './itemSlice'

// Define a type for the slice state
export interface TodoListState {
    items: Array<ItemState>
}

// Define the initial state using that type
const initialState: TodoListState = {
    items: []
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ItemState>) => {
            state.items.push(action.payload)
        },
        removeCompletedTodos: (state) => {
            state.items.filter(i => i.completed == false)
        }
    }
})

export const { addTodo, removeCompletedTodos } = todoListSlice.actions

export const selectList = (state: RootState) => state.list

export default todoListSlice.reducer