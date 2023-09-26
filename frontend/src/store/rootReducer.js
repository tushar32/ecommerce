import { combineReducers, createSlice } from "@reduxjs/toolkit";
import productImagesReducer from "./productImagesStore/productImagesReducer";
import productReducer from './../pages/products/productSlice';
import { errorReducer } from "./actions";

export const productImageSlice = createSlice(
    productImagesReducer
);

const rootReducer = combineReducers({
    products: productReducer,
    productImages: productImageSlice.reducer,
    errors: errorReducer
    
 })

 export default rootReducer