import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_URL } from "../../utils/constants";
import { apiCallBegin } from "../../store/actions";

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        product: null,
        loading: false,
    },

    reducers: {
        productsRequested: (state, action) => {
            state.loading = true;
            state.product = null;
        },
        productsReceived: (state, action) => {
            
            const { payload: {
                    response
                 }            
            } = action

            state.list = response
            state.loading = false;
        },

        productsRequestFailed: (state, action) => {
            state.loading = false;
        },

        productReceived: (state, action) => {
            
            const { payload: {
                    response
                 }            
                } = action

            state.product =  response;
            state.loading = false;
        },
    },
})


// Product Actions

const { productsRequested, productsReceived, productReceived, productsRequestFailed } = productSlice.actions

export const loadProducts = () => (dispatch) => {
    return dispatch(
        apiCallBegin({
            url: PRODUCT_URL+"/",
            method: 'GET',
            onStart: productsRequested.type,
            onSuccess: productsReceived.type,
            onError: productsRequestFailed.type,
        })
    );
};

export const loadProduct = (id) => (dispatch) => {
    
    const url = `${PRODUCT_URL}/${id}`
    return dispatch(
        apiCallBegin({
            url,
            method: 'GET',
            onStart: productsRequested.type,
            onSuccess: productReceived.type,
            onError: productsRequestFailed.type,
        })
    );
};

export const saveProduct = (id, body) => (dispatch) => {
    
    const url = `${PRODUCT_URL}/${id}`
    return dispatch(
        apiCallBegin({
            url,
            data:body,
            method: 'PUT',
            onStart: productsRequested.type,
            onSuccess: productReceived.type,
            onError: productsRequestFailed.type,
        })
    );
};



export default productSlice.reducer
