import React from 'react';
import { Field } from 'redux-form';
import { fromHtmlDate, toHtmlDate } from '../../utils/date';
import FormField from './FormField';

const renderField = ({ input, id, label, helpText, meta: { touched, error }}) => (
    <FormField label={label} forId={id} touched={touched} error={error} helpText={helpText}>
        <input id={id} type="date" {...input} className="form-control" />
    </FormField>
);

const DateField = ({
    name,
    label,
    helpText
}) => (
    <Field
        id={name}
        name={name}
        label={label}
        helpText={helpText}
        component={renderField}
        format={toHtmlDate}
        parse={fromHtmlDate}
    />
);

DateField.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    helpText: React.PropTypes.string
};

export default DateField;