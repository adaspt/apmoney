const empty = [];

export const getAll = (state) => state.transactionCategories.entities;
export const getByType = (state, type) =>
    (state.transactionCategories.byType &&
    state.transactionCategories.byType[type]) || empty;