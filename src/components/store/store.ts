// import { createStore } from "@reduxjs/toolkit";

import authReducer from "./authSlices";
import { configureStore } from "@reduxjs/toolkit";
import roomsSlice from "./roomsSlices"; // Import your rooms slice here

const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomsSlice, // Assuming you have a rooms reducer as well
    }

});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;