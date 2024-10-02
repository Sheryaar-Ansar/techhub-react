import { createSlice } from "@reduxjs/toolkit";


const initialState =  []

export const orderSlices = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addDetails : (state, action) => {
            state.push(action.payload)
    
        },
    },
})

export const { addDetails } = orderSlices.actions;
export default orderSlices.reducer;

