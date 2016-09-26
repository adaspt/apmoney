import * as types from './actionTypes';
import * as api from './api';
import { getAll } from './selectors';

export const loadAccounts = () => async (dispatch, getState) => {
    const state = getState();
    let accounts = getAll(state);
    if (accounts.length === 0) {
        accounts = await api.getAccounts();
        dispatch({ type: types.SET_ACCOUNTS, payload: { accounts } });
    }

    return accounts;
};

const loadCurrentBalance = () => async (dispatch) => {
    const currentBalance = await api.getCurrentBalance();
    dispatch({ type: types.SET_CURRENT_BALANCE, payload: { currentBalance }})
};

export const init = () => async (dispatch) => {
    dispatch({ type: types.INIT });
    try {
        await Promise.all([
            dispatch(loadAccounts()),
            dispatch(loadCurrentBalance())
        ]);
        
        dispatch({ type: types.INIT_SUCCESS });
    } catch (error) {
        dispatch({ type: types.INIT_FAILURE, error });
    }
};
