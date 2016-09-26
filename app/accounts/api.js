import http from '../utils/http';

export const getAccounts = async () => {
    const url = '/api/accounts';
    return await http.get(url);
};

export const getCurrentBalance = async () => {
    const url = `/api/accounts/currentbalance`;
    return await http.get(url);
};
