import React from 'react';
import { FormattedNumber } from 'react-intl';
import GroupItem from './GroupItem';

const Group = ({
    title,
    accounts
}) => (
    <table className="table">
        <thead className="thead-default">
            <tr>
                <th>{title}</th>
                <th className="text-xs-right">
                    <FormattedNumber value={accounts.balance} minimumFractionDigits={2} />
                </th>
            </tr>
        </thead>
        <tbody>
            {accounts.list.map(x => <GroupItem
                key={x.id}
                account={x}
                />)}
        </tbody>
    </table>
);

Group.propTypes = {
    title: React.PropTypes.string.isRequired,
    accounts: React.PropTypes.shape({
        balance: React.PropTypes.number.isRequired,
        list: React.PropTypes.array.isRequired
    }).isRequired
};

export default Group;