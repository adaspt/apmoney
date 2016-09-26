import http from '../utils/http';

export const create = async (values) => {
    const url = '/api/transactions';
    return await http.post(url, values);
};
