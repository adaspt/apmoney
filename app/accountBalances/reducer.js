import * as types from './actionTypes';

const initialState = {
    balances: {}
};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
        case types.SET_ACCOUNT_BALANCES:
            const period = payload.year * 100 + payload.month;
            return Object.assign({}, state, {
                balances: Object.assign({}, state.balances, {
                    [period]: payload.balances
                })
            });
        default:
            return state;
    }
};