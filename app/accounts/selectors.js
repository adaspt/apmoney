import { createSelector } from 'reselect';
import * as accountType from '../model/accountType';

export const getAll = (state) => state.accounts.accounts;
export const isLoading = (state) => state.accounts.loading;

export const getActive = createSelector(
    getAll,
    (accounts) => accounts.filter(x => !x.isClosed)
);

const getCurrentBalance = (state) => state.accounts.currentBalance;

const makeAccount = (account, currentBalance) => ({
    id: account.id,
    name: account.name,
    balance: currentBalance[account.id] || 0
});

export const getGroupedAccounts = createSelector(
    [getActive, getCurrentBalance],
    (accounts, currentBalance) => accounts.reduce((map, x) => {
        switch (x.type) {
            case accountType.CASH:
                map.cash.balance += currentBalance[x.id] || 0;
                map.cash.list.push(makeAccount(x, currentBalance));
                break;
            case accountType.CREDIT_CARD:
                map.creditCards.balance += currentBalance[x.id] || 0;
                map.creditCards.list.push(makeAccount(x, currentBalance));
                break;
            case accountType.LOAN_OR_DEBT:
                map.loansAndDebts.balance += currentBalance[x.id] || 0;
                map.loansAndDebts.list.push(makeAccount(x, currentBalance));
                break;
            case accountType.INVESTMENT:
                map.investments.balance += currentBalance[x.id] || 0;
                map.investments.list.push(makeAccount(x, currentBalance));
                break;
            default:
                console.warn('Unknown account type');
                break;
        }

        return map;
    }, {
        cash: { balance: 0, list: [] },
        creditCards: { balance: 0, list: [] },
        loansAndDebts: { balance: 0, list: [] },
        investments: { balance: 0, list: [] }
    })
);