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
        click: state => { 
            //strikethrough if true
            state.completed = !state.completed
        }
    }
})

export const {click} = itemSlice.actions;

export const selectCompleted = (state: RootState) => state.item.completed

export default itemSlice.reducer