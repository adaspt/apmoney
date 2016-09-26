import { arrayToMap } from '../utils/array';
import * as types from './actionTypes';
import * as api from './api';
import { getByPeriod } from './selectors';

export const loadBalances = (year, month) => async (dispatch, getState) => {
    const state = getState();
    let balances = getByPeriod(state, { year, month });
    if (typeof balances === 'undefined') {
        const response = await api.getBalances(year, month);
        balances = arrayToMap(response, x => x.accountId, x => x.amount);
        dispatch({ type: types.SET_ACCOUNT_BALANCES, payload: { year, month, balances }})
    }

    return balances;
};
