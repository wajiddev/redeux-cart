import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload); 
        }
    },
});

export const { addItem } = Cartslice.actions;

export const cartReducers = Cartslice.reducer;




