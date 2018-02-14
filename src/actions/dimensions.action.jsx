import { dimensionsTypes } from "../types";

export const dimensionsActions = {
    update,
};

function update(dimensions) {
    return dispatch => {
        dispatch({ type: dimensionsTypes.UPDATE, payload: dimensions });
    };
}