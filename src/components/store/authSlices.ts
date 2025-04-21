import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthAppwriteService } from "../config/authAppwriteServices";
import { createAccountProps, loginProps, userProps } from "@/types/typs";


const authAppwriteServices = new AuthAppwriteService();

export const createAccount = createAsyncThunk(
    "auth/createAccount",
    async ({ name, email, password }: createAccountProps, { rejectWithValue }) => {
        try {
            const response = await authAppwriteServices.createAccount({ name, email, password });
            console.log("🚀 ~ createAccount ~ response:", response)
            if (!response) {
                return rejectWithValue("Error creating account");
            }
            return response;
        } catch (error) {
            console.error("Create account error:", error);
            throw error;
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }: loginProps, { rejectWithValue }) => {
        try {
            const response = await authAppwriteServices.login(email, password);
            if (!response) {
                return rejectWithValue("Error logging in");
            }
            return response;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }

    }
);
export const doFetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await authAppwriteServices.getCurrentUser();
            if (response?.success === false) {
                return rejectWithValue("User account not created");
            } else {
                return response;
            }
        } catch (error) {
            console.error("Fetch current user error:", error);
            throw error;
        }
    }
);

export const deleteUser = createAsyncThunk(
    "auth/deleteUser",
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await authAppwriteServices.deleteUser(userId);
            console.log("🚀 ~ deleteUser ~ response:", response)
            if (response === undefined) {
                return rejectWithValue("Error deleting user");
            }
            return response;
        } catch (error) {
            console.error("Delete user error:", error);
            throw error;
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await authAppwriteServices.logout();
            console.log("🚀 ~ logoutUser ~ response:", response)
            if (response === undefined) {
                return rejectWithValue("Error logging out");
            }
            return response;
        } catch (error) {
            console.error("Logout error:", error);
            throw error;
        }
    }
);



const initialState: userProps = {
    status: false,
    user: null,
    token: null,
    isAuthenticated: false,
    loading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //  create account 
            .addCase(createAccount.pending, (state) => {
                state.loading = true;
            })
            .addCase(createAccount.fulfilled, (state, action) => {
                state.status = true;
                state.isAuthenticated = true;
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(createAccount.rejected, (state) => {
                state.status = false;
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
            })
            // loginUser and createAccount
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = true;
                state.isAuthenticated = true;
                state.loading = false;
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state) => {
                state.status = false;
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
            })
            // fetch currentUser
            .addCase(doFetchCurrentUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(doFetchCurrentUser.fulfilled, (state, action) => {
                state.status = true;
                state.isAuthenticated = true;
                state.loading = false;
                state.user = action.payload?.user ?? null;
            })
            .addCase(doFetchCurrentUser.rejected, (state) => {
                state.status = false;
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
            })
            // deleteUser
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state) => {
                state.status = false;
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
            })
            .addCase(deleteUser.rejected, (state) => {
                state.status = false;
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
            })
            // logoutUser
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.status = false;
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state) => {
                state.status = false;
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
            })


    }

});

export default authSlice.reducer;