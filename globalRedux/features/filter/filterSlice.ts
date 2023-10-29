import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'


export interface ISortProps {
  name: string
  type: string
  order: string
}

export interface FilterState {
    categoryId: number
    sort: ISortProps
    limit: number
    page: number
}

const initialState: FilterState = {
    categoryId: 0,
    sort: {
      name: 'популярности (DESC)',
      type: 'rating',
      order: 'desc',
    },
    limit: 4,
    page: 1
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {

     changeCategoryId: (state, action:PayloadAction<number>) => {
      state.categoryId = action.payload
    },
     changeSort: (state, action:PayloadAction<ISortProps> ) => {
      state.sort= action.payload
     },
     changedPage:(state, action:PayloadAction<number>) => {
      state.page = action.payload
     },
     incrementPage:(state) => {
      state.page += 1
     },
     decrementPage:(state) => {
      state.page -= 1
     }
   }
})


export const { changeCategoryId, changeSort, changedPage, incrementPage, decrementPage } = filterSlice.actions
export const selectFilter = (state: RootState ) => state.filter.categoryId
export default filterSlice.reducer