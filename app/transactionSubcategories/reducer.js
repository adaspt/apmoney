import { arrayToLookup } from '../utils/array';
import * as types from './actionTypes';

const initialState = {
    entities: null,
    byCategory: null
};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
        case types.SET_TRANSACTION_SUBCATEGORIES:
            return Object.assign({}, state, {
                entities: payload.entities,
                byCategory: arrayToLookup(payload.entities, x => x.categoryId)
            });
        default:
            return state;
    }
};
