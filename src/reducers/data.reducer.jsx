import { dataTypes } from '../types';

const initialState = {
    CO: {},
    CWU: {},
    p128: {},
    p123: {},
    PC1: {},
    PC2: {},
    Output: {},
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case dataTypes.UPDATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};