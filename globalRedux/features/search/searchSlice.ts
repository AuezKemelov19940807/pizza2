'use client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './../../store';

interface SearchStateProps {
    value: string
} 

const initialState: SearchStateProps = {
    value: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changedValue:((state, action:PayloadAction<string>) => {
       state.value = action.payload
    }),
    clearValue:((state) => {
        state.value = ''
    } )
  }
})

export const {changedValue, clearValue} = searchSlice.actions
export const selectSearch = (state:RootState) => state.search
export default searchSlice.reducer
