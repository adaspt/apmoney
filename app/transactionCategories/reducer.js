import { arrayToLookup } from '../utils/array';
import * as types from './actionTypes';

const initialState = {
    entities: null,
    byType: null
};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
        case types.SET_TRANSACTION_CATEGORIES:
            return Object.assign({}, state, {
                entities: payload.entities,
                byType: arrayToLookup(payload.entities, x => x.type)
            });
        default:
            return state;
    }
};
