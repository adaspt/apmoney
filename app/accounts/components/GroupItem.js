import React from 'react';
import { FormattedNumber } from 'react-intl';

const GroupItem = ({
    account
}) => (
    <tr>
        <td>{account.name}</td>
        <td className="text-xs-right">
            <FormattedNumber value={account.balance} minimumFractionDigits={2} />
        </td>
    </tr>
);

GroupItem.propTypes = {
    account: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        balance: React.PropTypes.number.isRequired
    }).isRequired
};

export default GroupItem;