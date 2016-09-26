export const getByPeriod = (state, { year, month }) => {
    const period = year * 100 + month;
    return state.accountBalances.balances[period];
};
