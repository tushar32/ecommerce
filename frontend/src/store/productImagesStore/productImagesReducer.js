const productImagesReducer = {
    name: "productImages",
    initialState: {
        images: [],
        loading: false,
    },

    reducers: {
        imageUploadStart: (state, action) => {
            state.loading = true;
        },

        imageUploaded: (state, action) => {
            
            const { payload: {
                    response
                 }            
                } = action

            console.log('action', action)
            console.log('response', response)
            state.images =  response ;
            state.loading = false;
        },

        imageUploadFailed: (state, action) => {
            state.loading = false;
        },
    },
}

export default productImagesReducer