'use client'

import { configureStore } from "@reduxjs/toolkit";
import pizzasReduser from "./features/pizzas/pizzasSlice";
import filterReduser from "./features/filter/filterSlice";
import searchReduser from "./features/search/searchSlice";
import cartReduser from "./features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        pizzas: pizzasReduser,
        filter:filterReduser,
        search:searchReduser,
        cart: cartReduser
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch