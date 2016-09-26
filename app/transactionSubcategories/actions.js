import * as api from './api';
import * as types from './actionTypes';
import { getAll } from './selectors';

export const loadTransactionSubcategories = () => async (dispatch, getState) => {
    const state = getState();
    let entities = getAll(state);
    if (entities == null) {
        entities = await api.getTransactionSubcategories();
        dispatch({ type: types.SET_TRANSACTION_SUBCATEGORIES, payload: { entities }});
    }

    return entities;
};
