export const editValidator = (values) => {
    const errors = {};
    if (!values.type) {
        errors.type = 'Required';
    }

    if (!values.accountId) {
        errors.accountId = 'Required';
    }

    if (!values.date) {
        errors.date = 'Required';
    }

    if (!values.amount) {
        errors.amount = 'Required';
    }

    return errors;
};
