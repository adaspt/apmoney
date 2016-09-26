import http from '../utils/http';

export const getTransactionCategories = async () => {
    const url = '/api/transactioncategories';
    return await http.get(url);
};
