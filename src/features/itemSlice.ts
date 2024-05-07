import type { RootState } from '../app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface ItemState {
    completed: boolean,
    text: string
}

// Define the initial state using that type
const initialState: ItemState = {
    completed: false,
    text: ''
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        click: (state, action: PayloadAction<ItemState>) => {
            //strikethrough if true
            console.log(state.completed);
            state.completed = !state.completed;
            // const todoItem = state.todoList.find(todo => todo == action);
            // console.log(todoItem);
            // todoItem.completed = !todoItem.completed;
            // if (todoItem != null) {
            //     console.log(todoItem.completed);
            //     return todoItem.completed;
            // }
        }
    }
})

export const {click} = itemSlice.actions;

// export const selectCompleted = (state: RootState) => state.todoItem.completed
// export const click = (item: ItemState) => {
//     item.completed = !item.completed
// }
export const getCompleted = (item: ItemState) => item.completed

// export default itemSlice.reducer