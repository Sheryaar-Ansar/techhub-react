import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    itemsPerPage : 9,
    currentPage : 1,
}


export const paginationSlices = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setItemsPerPage: (state, action) => {
            state.itemsPerPage = action.payload
        },
        setNextPage: (state) => {
            state.currentPage += 1
        }
    },
})

export const { setCurrentPage, setItemsPerPage, setNextPage } = paginationSlices.actions;
export default paginationSlices.reducer;