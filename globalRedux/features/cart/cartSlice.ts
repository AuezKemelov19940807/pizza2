'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../../store';


interface IdProps {
  cartItemId: string
}

interface CartStateProps {
    cartItems:NewItemCartProps[]
}

const initialState: CartStateProps = {
    cartItems:[],
}



export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
      addItemToCart: (state, action:PayloadAction<NewItemCartProps>) => {
        const itemId = state.cartItems.find((item) => item.id === action.payload.id)
        const newItem = {
          id: action.payload.id,
          imageUrl: action.payload.imageUrl,
          name: action.payload.name,
          type:action.payload.type,
          size:action.payload.size,
          count: action.payload.count,
          price: action.payload.price * action.payload.count
        }
      
         if(itemId) {
           itemId.count++
         } else {
          state.cartItems.push(newItem)
         }
        
      },
     incrementCartItem: (state, action:PayloadAction<IdProps>) => {
      const findIdNewItem = state.cartItems.find((item) => item.id === action.payload.cartItemId)

      if(findIdNewItem) {
        findIdNewItem.count++
      }
     },
     decrementCartItem:(state, action:PayloadAction<IdProps>) => {
      const findIdNewItem = state.cartItems.find((item) => item.id === action.payload.cartItemId)
      if(findIdNewItem) {
        findIdNewItem.count > 1 ? findIdNewItem.count-- : findIdNewItem.count
      }
     },
     removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );
    },
     clearCart:(state) => {
      state.cartItems = []
     }
    }
  
})



export const {addItemToCart, removeItemFromCart, clearCart, incrementCartItem, decrementCartItem} = cartSlice.actions
export const selectCart = (state: RootState ) => state.cart
export default cartSlice.reducer