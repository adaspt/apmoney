import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authMiddleware from './authMiddleware';
import errorMiddleware from './errorMiddleware';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import auth from './auth';
import accounts from './accounts';
import accountBalances from './accountBalances';
import transactions from './transactions';
import transactionCategories from './transactionCategories';
import transactionSubcategories from './transactionSubcategories';

const makeReducer = () => combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    auth: auth.reducer,
    accounts: accounts.reducer,
    accountBalances: accountBalances.reducer,
    transactions: transactions.reducer,
    transactionCategories: transactionCategories.reducer,
    transactionSubcategories: transactionSubcategories.reducer
});

const makeMiddlewares = () => {
    const middlewares = [thunk, errorMiddleware, authMiddleware];
    if (process.env.NODE_ENV === 'development') {
        const createLogger = require('redux-logger');
        const logger = createLogger({ collapsed: true });
        middlewares.push(logger);

        const immutableCheckMiddleWare = require('redux-immutable-state-invariant');
        middlewares.push(immutableCheckMiddleWare());
    }
    
    return middlewares;
};

const configureStore = () => {
    const reducer = makeReducer();
    const middlewares = makeMiddlewares();
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(...middlewares),
            window['devToolsExtension'] ? window['devToolsExtension']() : x => x
        )
    );

    return store;
};

export default configureStore;
