import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import auth from '../auth';

const createRequireAuth = store => (nextState, replace) => {
    const { auth } = store.getState();
    if (auth.isAuthenticated) {
        return;
    }

    replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
    });
};

const Home = () => <h1>Home</h1>;

const App = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/login" component={auth.Login} />
            <Route path="/" onEnter={createRequireAuth(store)}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
);

export default App;
