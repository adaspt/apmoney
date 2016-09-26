import React from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { INCOME, EXPENCE } from '../../../model/transactionType';
import { editValidator } from '../validators';
import { TextField, DateField, NumberField, SelectField } from '../../../components/forms';
import TransactionType from './TransactionType';

const Form = ({
    transactionType,
    accounts,
    categories,
    subcategories,
    handleSubmit,
    submitting,
    onSubmit,
    change
}) => (
    <form onSubmit={handleSubmit(onSubmit)}>
        <SelectField name="accountId" label="Account" options={accounts} />
        <DateField name="date" label="Date" />
        <NumberField name="amount" label="Amount" prepend={
            <TransactionType
                type={transactionType}
                onChange={() => change("type", transactionType === INCOME ? EXPENCE : INCOME)}
                />
            } />
        <SelectField name="categoryId" label="Category" options={categories} />
        <SelectField name="subcategoryId" label="Subcategory" options={subcategories} />
        <TextField name="note" label="Note" />
        <div className="form-group">
            <button type="submit" className="btn btn-primary" disabled={submitting}>Save</button>
            {' '}
            <Link className="btn btn-secondary" to="/" disabled={submitting}>Cancel</Link>
        </div>
    </form>
);

Form.propTypes = {
    transactionType: React.PropTypes.number.isRequired,
    accounts: React.PropTypes.array.isRequired,
    onSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
    form: 'transactionEdit',
    validate: editValidator
})(Form);