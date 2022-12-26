import { createSlice } from "@reduxjs/toolkit";

const apiPathSlice = createSlice({
    initialState:
        localStorage.getItem("productsPaths") ?
        JSON.parse(localStorage.getItem("productsPaths"))
        :
        {},
    name: "apiPath",

    reducers: {
        Get_Api_Path: (state, action) => {
            state = action.payload;

            // Save State in localStorage
            localStorage.setItem("productsPaths", JSON.stringify(state));
        },
    }
});

export const {Get_Api_Path} = apiPathSlice.actions;

// Select ProductsPaths
export const selectProductsPaths = (state) => state.productsPaths;

export default apiPathSlice.reducer;