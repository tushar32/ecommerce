import { configureStore } from "@reduxjs/toolkit";
import api from "./middlewares/api";
import rootReducer, { productImageSlice, productSlice } from "./reducers";
import { combineReducers } from 'redux'





export default function store() {
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    });
}