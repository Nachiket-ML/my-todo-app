import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { ItemState } from './itemSlice'

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
        addTodo: (state, action: PayloadAction<ItemState>) => {
            state.items.push(action.payload)
        },
        removeCompletedTodos: (state) => {
            state.items = state.items.filter((item) => item.completed == false)
        },
        click: (state, action: PayloadAction<ItemState>) => {
            //strikethrough if true
            // console.log(state.completed);
            // state.completed = !state.completed;
            const todoItem = state.items.find(todo => todo.text == action.payload.text);
            console.log(todoItem);
            if (todoItem != null) {
                todoItem.completed = !todoItem.completed;
                console.log(todoItem.completed);
                // return todoItem.completed;
            }
        }
    }
})

export const { addTodo, click, removeCompletedTodos } = todoListSlice.actions

export const selectList = (state: RootState) => state.todoList.items

export default todoListSlice.reducer