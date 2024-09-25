import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    slider: false
}

export const cartsliderSlices = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        cartSlider: (state) => {
            state.slider = !state.slider
        },
    }
})

export const { cartSlider } = cartsliderSlices.actions;
export default cartsliderSlices.reducer