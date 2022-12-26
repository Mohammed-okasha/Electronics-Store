import { configureStore } from "@reduxjs/toolkit";
//? Reducers Functions
import apiPathReducer from "./slices/apiPath-slice";
import userAuthReducser from "./slices/userAuth-slice";
import cartReducer from "./slices/cartSlice";
import shopProductsReducer from "./slices/shopSlice";
import productsSearchedReducer from "./slices/productsSearched";

export const store = configureStore({
    reducer: {
        productsPaths: apiPathReducer,
        userAuth: userAuthReducser,
        cart: cartReducer,
        shopProducts: shopProductsReducer,
        productsSearched: productsSearchedReducer
    }
});