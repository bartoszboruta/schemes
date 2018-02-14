import { dataTypes } from '../types';

const initialState = {
};

export function data(state = initialState, action) {
    switch (action.type) {
        case dataTypes.UPDATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}