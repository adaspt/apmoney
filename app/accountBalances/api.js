import http from '../utils/http';

export const getBalances = async (year, month) => {
    const url = `/api/accountBalances?year=${year}&month=${month}`;
    return await http.get(url);
};