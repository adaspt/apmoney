import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

const makeReducer = () => combineReducers({
    form: formReducer,
    auth: auth.reducer
});

const makeMiddlewares = () => {
    const middlewares = [thunk];
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