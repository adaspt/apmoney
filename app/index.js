import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import createRequireAuth from './createRequireAuth';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const store = configureStore();
const requireAuth = createRequireAuth(store);

ReactDOM.render(
  <App store={store} requireAuth={requireAuth} />,
  document.getElementById('root')
);
