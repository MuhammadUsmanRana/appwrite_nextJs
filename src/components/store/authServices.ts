import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    user: null,
    token: null,
    isAuthenticated: false,
    loading: true,
    userData: [],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.isAuthenticated = true;
            state.loading = false;
            state.userData = action.payload;
        },

        logout: (state) => {
            state.status = false;
            state.isAuthenticated = false;
            state.loading = false;
            state.userData = [];
        }
    }

});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;