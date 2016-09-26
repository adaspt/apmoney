import http from '../utils/http';

export const getTransactionSubcategories = async () => {
    const url = '/api/transactionsubcategories';
    return await http.get(url);
};
