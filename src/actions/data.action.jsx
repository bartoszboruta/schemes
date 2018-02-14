import { dataTypes } from "../types";

export const dataActions = {
    update,
};

function update(data) {
    return dispatch => {
        dispatch({ type: dataTypes.UPDATE, payload: data });
    };
}