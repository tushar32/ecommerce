import * as actions from "../actions";
import axios from "./../../utils/axios";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegin.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } =
            action.payload;

            console.log(action)
        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
            const response = await axios.request({
                url,
                method,
                data,
            });
            if(response.status === 200) {
                const { result, error, success } = response.data

                if(success) {
                    // General
                    dispatch(actions.apiCallSuccess(result));
                    // Specific
                    if (onSuccess)
                        dispatch({ type: onSuccess, payload: result });
                } else {
                    if (onError) {
                        dispatch(actions.apiCallFailed(error.message));

                        dispatch({ type: onError, payload: error.message });
                    }
                }
            }
        } catch (error) {
            // General
            dispatch(actions.apiCallFailed(error.message));
            // Specific
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;