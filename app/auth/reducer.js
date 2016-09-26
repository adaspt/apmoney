import * as types from './actionTypes';

const initialState = {
    isAuthenticated: sessionStorage.getItem('idToken') != null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOGIN_SUCCESS:
            return { isAuthenticated: true };
        default:
            return state;
    }
};