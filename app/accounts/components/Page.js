import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading'
import * as actions from '../actions';
import { isLoading, getGroupedAccounts } from '../selectors';

import Group from './Group';

const mapStateToProps = (state) => ({
    loading: isLoading(state),
    accounts: getGroupedAccounts(state)
});

class Page extends React.Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        const { loading, accounts } = this.props;
        return (
            <Loading loading={loading}>
                <h3>Accounts</h3>
                <Group title="Cash" accounts={accounts.cash} />
                <Group title="Credit cards" accounts={accounts.creditCards} />
                <Group title="Loans and debts" accounts={accounts.loansAndDebts} />
                <Group title="Investments" accounts={accounts.investments} />
            </Loading>
        );
    }
}

export default connect(mapStateToProps, actions)(Page);