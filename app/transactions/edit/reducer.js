import * as types from './actionTypes';

const initialState = {
    loading: false,
    entity: null
};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
        case types.CREATE_INIT:
            return Object.assign({}, state, {
                loading: true
            });
        case types.CREATE_INIT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                entity: payload.entity
            });
        case types.CREATE_INIT_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case types.CREATE_DESTROY:
            return Object.assign({}, state, {
                entity: null
            });
        default:
            return state;
    }
};