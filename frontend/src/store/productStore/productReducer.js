const productReducer = {
    name: "products",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        productRequested: (state, action) => {
            state.loading = true;
        },
        productReceived: (state, action) => {
            
            const { payload: {
                    response
                 }            
                } = action

            console.log('action', action)
            console.log('response', response)
            state.list =  response;
            state.loading = false;
        },

        productRequestFailed: (state, action) => {
            state.loading = false;
        },
    },
}

export default productReducer