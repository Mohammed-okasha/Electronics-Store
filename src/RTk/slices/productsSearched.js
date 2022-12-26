import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsList: []
}

const productsSearched = createSlice({
    initialState: initialState,
    name: "productsSearched",

    reducers: {
        SET_PRODUCTS_SEARCHED: (state, action) => {
            state.productsList = action.payload;
        }
    }
});

export const { SET_PRODUCTS_SEARCHED } = productsSearched.actions;

// Select Products Searched
export const selectProductsSearched = (state) => state.productsSearched.productsList;

export default productsSearched.reducer;