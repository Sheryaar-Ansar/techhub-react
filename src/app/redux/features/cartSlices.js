import { createSlice } from "@reduxjs/toolkit";


const initialState = []


export const cartSlices = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const existingProduct = state.find((item)=>item.id === action.payload.id)
            if(existingProduct){
                return state.map((item)=>item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
            }else{
                state.push(action.payload)
            }
            
        },
        removeCart: (state, action) => {
            state.filter((item)=>item.id !== action.payload)
        },
        cartIncrement: (state, action) => {
            return state.map((item)=>item.id===action.payload.id ? {...item, qty: item.qty + 1} : item)
        },
        cartDecrement: (state, action) => {
            return state.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty -1 } : item)
        },
    }
})

export const { addtoCart, removeCart, cartIncrement, cartDecrement } = cartSlices.actions;
export default cartSlices.reducer;