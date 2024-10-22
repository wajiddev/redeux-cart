import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./Slices/Cartslice"; 

export const store = configureStore({
    reducer: {
        cart: cartReducers, 
    }
});

// cdsvcdsdsfds