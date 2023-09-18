import { createSlice } from "@reduxjs/toolkit";
import productReducer from "./productStore/productReducer";
import productImagesReducer from "./productImagesStore/productImagesReducer";

export const productSlice = createSlice(
    productReducer
);

export const productImageSlice = createSlice(
    productImagesReducer
);

const rootReducer = combineReducers({
    products: productSlice.reducer,
    productImages: productImageSlice.reducer
 })

 export default rootReducer