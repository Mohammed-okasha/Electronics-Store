//? Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
    products: [],
    category: "",
    isLoading : false,
    listLayout: false
};

const shopProducts = createSlice({
    initialState: initialState,
    name: "shopProducts",

    reducers: {
        GET_SHOP_PRODUCTS: (state, action) => {
            state.products = action.payload.data;
            state.category = action.payload.category;
        },

        SORT_PRODUCTS: (state, action) => {
            state.products = action.payload.data;
            state.category = action.payload.category;
        },

        SEARCH_PRODUCTS: (state, action) => {
            state.products = action.payload;
        },

        SET_ACTIVE_LOADING: (state, action) => {
            state.isLoading = true;
        },

        REMOVE_ACTIVE_LOADING: (state, action) => {
            state.isLoading = false;
        },

        LIST_LAYOUT: (state, action) => {
            state.listLayout = action.payload;
        }
    }
});

export const {
    GET_SHOP_PRODUCTS,
    SORT_PRODUCTS,
    SEARCH_PRODUCTS,
    SET_ACTIVE_LOADING,
    REMOVE_ACTIVE_LOADING,
    LIST_LAYOUT

} = shopProducts.actions;

export const selectShopProducts = (state) => state.shopProducts.products;
export const selectProductsCategory = (state) => state.shopProducts.category;
export const selectIsLoading = (state) => state.shopProducts.isLoading;
export const selectListLayout = (state) => state.shopProducts.listLayout;

export default shopProducts.reducer;



