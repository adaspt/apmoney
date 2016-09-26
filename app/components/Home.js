import React from 'react';
import { Link } from 'react-router';
import Header from './Header';
import accounts from '../accounts';

const Home = () => (
    <div>
        <Header title="APMoney" />
        <div className="form-group">
            <Link className="btn btn-success" to="/transactions/create">Transaction</Link>
        </div>
        <accounts.ui.Page />
    </div>
);

export default Home;