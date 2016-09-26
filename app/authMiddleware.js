import { browserHistory } from 'react-router';

const authMiddleware = store => next => action => {
    const status = action && action.error && action.error.status;
    if (status === 401) {
        setTimeout(() => browserHistory.push('/login'), 1000);
        return;
    }

    return next(action);
};

export default authMiddleware;
