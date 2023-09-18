import { apiCallBegin } from "../actions";
import { productSlice } from "../reducers";

const { productRequested, productReceived, productRequestFailed } = productSlice.actions

const url = "/products";

export const loadProducts = () => (dispatch) => {
    return dispatch(
        apiCallBegin({
            url,
            method: 'GET',
            onStart: productRequested.type,
            onSuccess: productReceived.type,
            onError: productRequestFailed.type,
        })
    );
};