import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import * as api from './api';

export const login = googleIdToken => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    try {
        await api.login(googleIdToken);
        dispatch({ type: types.LOGIN_SUCCESS });
        browserHistory.push('/');
    } catch (error) {
        dispatch({ type: types.LOGIN_FAILURE });
    }
};