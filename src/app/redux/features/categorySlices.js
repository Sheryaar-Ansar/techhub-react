import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category: 'All'
}

export const categorySlices = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
            console.log(action);
            
        }
    }
})

export const { setCategory } = categorySlices.actions;
export default categorySlices.reducer