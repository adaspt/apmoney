const empty = [];

export const getAll = (state) => state.transactionSubcategories.entities;
export const getByCategory = (state, categoryId) =>
    (state.transactionSubcategories.byCategory &&
    state.transactionSubcategories.byCategory[categoryId]) || empty;