import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        add(state, action){
            const newItem = action.payload
            const itemExisting = state.find(item => item.id === newItem.id)
            
            if (itemExisting) {
                // itemExisting.quantity += 1
            }
            else{
                // newItem.quantity = 1
                state.push(newItem)
            }
        },
        remove(state, action){
            return state.filter(cart => cart.id !== action.payload.id)
        },
    }
})

export const {add, remove} = cartSlice.actions
export default cartSlice.reducer