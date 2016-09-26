import * as types from './actionTypes';

const initialState = {
    loading: false,
    accounts: [],
    currentBalance: {}
};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
        case types.INIT:
            return Object.assign({}, state, {
                loading: true
            });
        case types.INIT_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            });
        case types.INIT_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case types.SET_ACCOUNTS:
            return Object.assign({}, state, {
                accounts: payload.accounts
            });
        case types.SET_CURRENT_BALANCE:
            return Object.assign({}, state, {
                currentBalance: payload.currentBalance
            });
        default:
            return state;
    }
};