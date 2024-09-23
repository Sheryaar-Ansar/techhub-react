import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode: JSON.parse(localStorage.getItem('darkMode')) || false
}

export const toggleSlices = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        handleToggle : (state) => {
            state.mode = !state.mode
            localStorage.setItem('darkMode', JSON.stringify(state.mode))
        }
    }
})

export const { handleToggle } = toggleSlices.actions;
export default toggleSlices.reducer;