import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],

    reducers: {
        cartItemRequested: (state, action) => {
            state.loading = true;
            state.product = null;
        },
        cartItemAdded: (state, action) => {
            const { payload: {
                item
             }            
            } = action

           console.log(action)
            if(!state.find(product =>  product._id == item._id)) 
                state.push(item)

        },

        cartItemFailed: (state, action) => {
            state.loading = false;
        },
    },
})


// Product Actions

export const { cartItemRequested, cartItemAdded, cartItemFailed } = cartSlice.actions


export default cartSlice.reducer
