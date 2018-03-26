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

  //solar needed params
    p128: {},
    p130: {},
    p132: {},
    p134: {},
    p136: {},
    p138: {},
    p152: {},
    p154: {},
    p156: {},
    p292: {},
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