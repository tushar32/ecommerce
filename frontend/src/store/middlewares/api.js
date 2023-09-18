import axios from "axios";
import * as actions from "../actions";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegin.type) return next(action);

        console.log('action', action)
        const { url, method, data, onStart, onSuccess, onError } =
            action.payload;

            console.log(action)
        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
            const response = await axios.request({
                baseURL: "http://localhost:8000/api/v1",
                url,
                method,
                data,
            });

            console.log(response)
            const { result } = response.data
            // General
            dispatch(actions.apiCallSuccess(result));
            // Specific
            if (onSuccess)
                dispatch({ type: onSuccess, payload: result });
        } catch (error) {
            // General
            dispatch(actions.apiCallFailed(error.message));
            // Specific
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;