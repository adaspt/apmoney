import { SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';
import * as transactionType from '../../model/transactionType';
import { today } from '../../utils/date';
import accounts from '../../accounts';
import transactionCategories from '../../transactionCategories';
import transactionSubcategories from '../../transactionSubcategories';
import * as api from '../api';
import * as types from './actionTypes';

export const initCreate = () => async (dispatch, getState) => {
    dispatch({ type: types.CREATE_INIT });
    try {
        await Promise.all([
            dispatch(accounts.actions.loadAccounts()),
            dispatch(transactionCategories.actions.loadTransactionCategories()),
            dispatch(transactionSubcategories.actions.loadTransactionSubcategories())
        ]);

        const state = getState();
        const accountList = accounts.selectors.getActive(state);
        const entity = {
            type: transactionType.EXPENCE,
            accountId: accountList.length > 0 ? accountList[0].id : null,
            date: today(),
        };
        dispatch({ type: types.CREATE_INIT_SUCCESS, payload: { entity } });
    } catch (error) {
        dispatch({ type: types.CREATE_INIT_FAILURE, error });
    }
};

export const saveCreate = (values) => async (dispatch) => {
    try {
        const entity = Object.assign({}, values, {
            amount: values.type === transactionType.INCOME ? values.amount : values.amount * -1
        });

        await api.create(entity);
        browserHistory.push('/');
    } catch (error) {
        throw new SubmissionError();
    }
};

export const createDestroy = () => ({
    type: types.CREATE_DESTROY
});
