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
    name: 'todoItem',
    initialState,
    reducers: {
        clickViewItem: (state, action: PayloadAction<ItemState>) => {
            //strikethrough if true
            console.log(action.payload);
            state.dueDate = action.payload.dueDate;
            state.completed = action.payload.completed;
            state.id = action.payload.id;
            state.text = action.payload.text;
        }
    }
})

export const {clickViewItem} = itemSlice.actions;

export const selectItem = (state: RootState) => state.todoItem
// export const click = (item: ItemState) => {
//     item.completed = !item.completed
// }
export const getCompleted = (item: ItemState) => item.completed

export default itemSlice.reducer