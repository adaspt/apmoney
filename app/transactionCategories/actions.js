import * as api from './api';
import * as types from './actionTypes';
import { getAll } from './selectors';

export const loadTransactionCategories = () => async (dispatch, getState) => {
    const state = getState();
    let entities = getAll(state);
    if (entities == null) {
        entities = await api.getTransactionCategories();
        dispatch({ type: types.SET_TRANSACTION_CATEGORIES, payload: { entities }});
    }

    return entities;
};
