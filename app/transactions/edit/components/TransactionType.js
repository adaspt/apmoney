import React from 'react';
import classNames from 'classnames';
import * as transactionType from '../../../model/transactionType'; 

const TransactionType = ({ type, onChange }) => (
    <span className="input-group-btn">
        <button
            className={classNames("btn", type === transactionType.INCOME ? "btn-info" : "btn-warning")}
            type="button"
            onClick={onChange}>
            <i className={classNames("fa", type === transactionType.INCOME ? "fa-plus" : "fa-minus")}></i>
        </button>
    </span>
);

TransactionType.propTypes = {
    type: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
};

export default TransactionType;