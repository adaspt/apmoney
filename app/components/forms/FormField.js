import React from 'react';
import classNames from 'classnames';

const FormField = ({ label, forId, prepend, touched, error, helpText, children }) => (
    <div className={classNames('form-group row', { 'has-danger': touched && !!error })}>
        <label htmlFor={forId} className="col-sm-3 col-form-label">{label}</label>
        <div className="col-sm-9">
            {!prepend && children}
            {!!prepend && <div className="input-group">{prepend}{children}</div>}
            {touched && error && <div className="form-control-feedback">{error}</div>}
            {helpText && <small className="form-text text-muted">{helpText}</small>}
        </div>
    </div>
);

FormField.propTypes = {
    label: React.PropTypes.string.isRequired,
    forId: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    prepend: React.PropTypes.element,
    touched: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string,
    helpText: React.PropTypes.string
};

export default FormField;