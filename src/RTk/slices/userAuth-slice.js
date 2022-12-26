import { createSlice } from "@reduxjs/toolkit";
import { update } from "firebase/database";

// initialState
const initialState = {
    isLoggedin: false,
    userName: null,
    useEmail: null,
    userId: null
};

// userAuth Slice
const userAuthSlice = createSlice({
    initialState: initialState,
    name: "userAuth",

    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            // update state Values
            state.isLoggedin = true;
            state.userName = action.payload.userName;
            state.useEmail = action.payload.userEmail;
            state.userId = action.payload.userId;
        },

        REMOVE_USER_ACTIVE: (state, action) => {
            // Reset state Values
            state.isLoggedin = false;
            state.userName = null;
            state.useEmail = null;
            state.userId = null;
        }
    }
});

// distraction Actions Creator Functions
export const { SET_ACTIVE_USER, REMOVE_USER_ACTIVE } = userAuthSlice.actions;

// Select User Data Functions
export const selectIsLoggedin = (state) => state.userAuth.isLoggedin;
export const selectUserName = (state) => state.userAuth.userName;
export const selectUserEmail = (state) => state.userAuth.useEmail;
export const selectUserId = (state) => state.userAuth.userId;

export default userAuthSlice.reducer;
