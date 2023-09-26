import { configureStore } from "@reduxjs/toolkit";
import api from "./middlewares/api";
import rootReducer from "./rootReducer";

export default function store() {
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    });
}