import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxToastr from 'react-redux-toastr';
import auth from '../auth';
import transactions from '../transactions';
import Page from './Page';
import Home from './Home';

const App = ({ store, requireAuth }) => (
    <Provider store={store}>
        <IntlProvider locale="en">
            <div>
                <Router history={browserHistory}>
                    <Route path="/login" component={auth.Login} />
                    <Route path="/" onEnter={requireAuth} component={Page}>
                        <IndexRoute component={Home} />
                        <Route path="transactions">
                            <Route path="create" component={transactions.ui.EditPage} />
                            <Route path=":id" component={transactions.ui.EditPage} />
                        </Route>
                    </Route>
                </Router>
                <ReduxToastr />
            </div>
        </IntlProvider>
    </Provider>
);

export default App;
