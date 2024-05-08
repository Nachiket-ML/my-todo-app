import type { RootState } from '../../app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

// Define a type for the slice state
export interface ItemState {
    id: string;
    text: string;
    completed: boolean,
    dueDate: Date;
}

// Define the initial state using that type
const initialState: ItemState = {
    id: nanoid(),
    text: '',
    completed: false,
    dueDate: new Date()
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        click: (state, action: PayloadAction<ItemState>) => {
            //strikethrough if true
            console.log(state.completed);
            state = action.payload;
            // state.completed = !state.completed;
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

export const selectItem = (state: RootState) => state.todoItem
// export const click = (item: ItemState) => {
//     item.completed = !item.completed
// }
export const getCompleted = (item: ItemState) => item.completed

export default itemSlice.reducer