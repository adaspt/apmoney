import { toastr } from 'react-redux-toastr';

const errorMiddleware = store => next => action => {
    if (action.error) {
        const message = action.error.message;
        toastr.error('Error', message);
    }

    return next(action);
};

export default errorMiddleware;
