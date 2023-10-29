//reduxjs/toolkit
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './../../store';


export const fetchPizzasItems = createAsyncThunk('fetchPizzasItems', async (filters: IFilterProps ) => {
const {categoryId, type, order, search, limit, page} = filters
const url = new URL('https://653ce3a6d5d6790f5ec8653d.mockapi.io/items')


if(categoryId) {
  url.searchParams.append('category', categoryId.toString())
} else {
  url.searchParams.delete('category')
}

if(type) {
  url.searchParams.append('sortBy', type)
} else {
  url.searchParams.delete('sortBy')
}

if(order) {
  url.searchParams.append('order', order)
} else {
  url.searchParams.delete('order')
}

if(search) {
  url.searchParams.append('search', search)
} else {
  url.searchParams.delete('search')
}
if(page) {
  url.searchParams.append('page', page.toString());
} else {
  url.searchParams.delete('page')
}

if(limit) {
  url.searchParams.append('limit', limit.toString());
} else {
  url.searchParams.delete('limit')
}

   const result = await fetch(url)
   return  result.json() 
})

interface IInitialStateProps {
  items: IPizzaProps[]
  isLoading: 'loading' | 'success' | 'error'
}

const initialState:IInitialStateProps = {
  items: [],
  isLoading: 'loading',
} 

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
     changedItems:(state, action) => state.items = action.payload,
    },
    extraReducers: (builder) => {  
    builder
    .addCase(fetchPizzasItems.pending, (state) => {
    state.isLoading = 'loading'
    state.items  = [] 
   })
   .addCase(fetchPizzasItems.fulfilled, (state, action:PayloadAction<IPizzaProps[]>) => {
    state.isLoading = 'success'
    state.items  = action.payload
   })
   .addCase(fetchPizzasItems.rejected, (state) => {
    state.isLoading = 'error'
    state.items  = []
  })

 }
})

export  const {changedItems} = pizzasSlice.actions
export const selectPizzas = (state: RootState ) => state.pizzas
export default pizzasSlice.reducer