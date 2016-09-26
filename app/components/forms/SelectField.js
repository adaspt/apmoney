import React from 'react';
import { Field } from 'redux-form';
import FormField from './FormField';

const renderField = ({ input, id, label, options, helpText, meta: { touched, error }}) => (
    <FormField label={label} forId={id} touched={touched} error={error} helpText={helpText}>
        <select id={id} type="text" {...input} className="form-control">
            <option value={null}></option>
            {!!options && options.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}
        </select>
    </FormField>
);

const SelectField = ({
    name,
    label,
    options,
    helpText
}) => (
    <Field
        id={name}
        name={name}
        label={label}
        options={options}
        helpText={helpText}
        component={renderField}
    />
);

SelectField.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired
    })).isRequired,
    helpText: React.PropTypes.string
};

export default SelectField;