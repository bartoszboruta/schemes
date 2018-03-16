import { dataTypes } from '../types';

const initialState = {
    CO: {
        type: {},
        additionalHeater: {}
    },
    CWU: {
        type: {},
        additionalHeater: {},
        circulation: {}
    },
    date: {},
    PC1: {},
    PC2: {},
    Output: {
        circuit1: {},
        circuit2: {},
        circuit3: {},
        temperatureSensor: {},
    },
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