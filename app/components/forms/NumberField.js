import React from 'react';
import { Field } from 'redux-form';
import FormField from './FormField';

const renderField = ({ input, id, label, prepend, helpText, meta: { touched, error }}) => (
    <FormField label={label} forId={id} prepend={prepend} touched={touched} error={error} helpText={helpText}>
        <input id={id} type="number" {...input} className="form-control" />
    </FormField>
);

const NumberField = ({
    name,
    label,
    helpText,
    prepend
}) => (
    <Field
        id={name}
        name={name}
        label={label}
        helpText={helpText}
        component={renderField}
        prepend={prepend}
    />
);

NumberField.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    helpText: React.PropTypes.string,
    prepend: React.PropTypes.element
};

export default NumberField;