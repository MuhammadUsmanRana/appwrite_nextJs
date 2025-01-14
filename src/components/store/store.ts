// import { createStore } from "@reduxjs/toolkit";

import authReducer from "./authServices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;