import { createSlice } from "@reduxjs/toolkit";
//? React Toast
import { toast } from "react-toastify";
//!=================================================================

// Save Cart In localStorage
function saveCart(cartItems) {
    return localStorage.setItem("cart-items", JSON.stringify(cartItems));
};

// initialState
const initialState = {
    cartItems:
        localStorage.getItem("cart-items") ? JSON.parse(localStorage.getItem("cart-items"))
        :
        [],

    totalCartItems: 0,
    cartSubTotal: 0,
    shippingPrice: "50.00",
    totalCartPrice: 0,
};

const cartSlice = createSlice({
    initialState: initialState,
    name: "cart",

    reducers: {
        ADD_PRODUCT_TO_CART: (state, action) => {
            const { id, title } = action.payload;
            const maxQuantity = 5;

            // Get productIndex
            const productIndex = state.cartItems.findIndex(item => item.id === id);

            // Check For productIndex
            if (productIndex >= 0) {
                if ((state.cartItems[productIndex].quantity += 1) > 5) {
                    state.cartItems[productIndex].quantity = maxQuantity;

                    toast.info(`${maxQuantity} is maxed quantity`, {
                        position: "top-left",
                        autoClose: "3000",
                        theme: "colored"
                    })

                } else {
                    toast.success(`${state.cartItems[productIndex].title} quantity is updated`, {
                        position: "top-left",
                        autoClose: "3000",
                        theme: "colored"
                    })
                };

            } else {
                // tempProduct
                const tempProduct = {...action.payload, quantity: 1};

                // Push tempProduct To cartItems
                state.cartItems.push(tempProduct);

                toast.success(`${title} added to cart`, {
                    position: "top-left",
                    autoClose: "3000",
                    theme: "colored"
                });
            }

            // Save Cart
            saveCart(state.cartItems);
        },

        REMOVE_PRODUCT_FROM_CART: (state, action) => {
            const { id, title } = action.payload;

            // Filter Cart Items and return New Array Of Next Products
            const nextProducts = state.cartItems.filter(item => item.id !== id);

            // Update cartItems
            state.cartItems = nextProducts;

            // Update isAddedProduct Value After Remove Product To Cart
            state.isAddedProduct = false;

            toast.success(`${title} is removed from cart`, {
                position: "top-left",
                autoClose: "3000",
                theme: "colored"
            })

            // Save Cart
            saveCart(state.cartItems);

            // Save isAddedProduct in localStorage
            localStorage.setItem("isAddedProduct", state.isAddedProduct);
        },

        INCREASE_PRODUCT_QUANTITY: (state, action) => {
            const { id, title } = action.payload;
            // Max Quantity
            const maxQuantity = 5;

            // Find Product in cartItems
            const product = state.cartItems.find(item => item.id === id);

            if ((product.quantity += 1) > 5) {
                product.quantity = maxQuantity;

                toast.info(`${maxQuantity} is maxed quantity`, {
                    position: "top-left",
                    autoClose: "3000",
                    theme: "colored"
                })

            } else {
                toast.success(`${title} quantity is updated`, {
                    position: "top-left",
                    autoClose: "3000",
                    theme: "colored"
                })
            };

            // Save Cart
            saveCart(state.cartItems);
        },

        DECREASE_PRODUCT_QUANTITY: (state, action) => {
            const { id, title } = action.payload;

            // Find Product in cartItems
            const product = state.cartItems.find(item => item.id === id);

            if ((product.quantity -= 1) === 0) {
                if (window.confirm(`are you sure you want to remove ${title}`)) {
                    // Filter Cart Items and return New Array Of Next Products
                    const nextProducts = state.cartItems.filter(item => item.id !== id);

                    // Update cartItems
                    state.cartItems = nextProducts;

                    toast.success(`${title} is removed from cart`, {
                        position: "top-left",
                        autoClose: "3000",
                        theme: "colored"
                    })

                } else {
                    product.quantity = 1;
                };

            } else {
                toast.success(`${title} quantity is updated`, {
                    position: "top-left",
                    autoClose: "3000",
                    theme: "colored"
                })
            };

            // Save Cart
            saveCart(state.cartItems);
        },

        CLEAR_CART: (state, action) => {
            state.cartItems = [];

            // Save Cart
            saveCart(state.cartItems);
        },

        GET_CART_VALUES: (state, action) => {
            // Looping On cartItems
            let {totalItems, subTotal} = state.cartItems.reduce((cartValues, item) => {
                const { price, quantity } = item;

                // Get Total Items
                cartValues.totalItems += quantity;
                // Get subTotal
                cartValues.subTotal += price * quantity;

                return cartValues;

            }, {
                totalItems: 0,
                subTotal: 0,
            });

            state.totalCartItems = parseInt(totalItems);
            state.cartSubTotal = parseFloat(subTotal).toFixed(2);
            state.totalCartPrice = parseFloat((+state.cartSubTotal) + (+state.shippingPrice)).toFixed(2);
        }
    }
});

// export Action Creator Functions And reducer function
export const { 
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    INCREASE_PRODUCT_QUANTITY,
    DECREASE_PRODUCT_QUANTITY,
    CLEAR_CART,
    GET_CART_VALUES

} = cartSlice.actions;

// Select Cart Values
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalCartItems = (state) => state.cart.totalCartItems;
export const selectCartSubTotal = (state) => state.cart.cartSubTotal;
export const selectShippingPrice = (state) => state.cart.shippingPrice;
export const selectTotalCartPrice = (state) => state.cart.totalCartPrice;
export const selectIsAddedProduct = (state) => state.cart.isAddedProduct;

export default cartSlice.reducer;
