import { createSlice } from "@reduxjs/toolkit";


const initialState =  []

export const orderSlices = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addDetails : (state, action) => {
            state.push(action.payload)
    
        },
        removeDetails: (state) => {
            let updatedArr = []
            return updatedArr
        }
    },
})

export const { addDetails,removeDetails } = orderSlices.actions;
export default orderSlices.reducer;

