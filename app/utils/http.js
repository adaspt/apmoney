const HTTP_GET = 'GET';
const HTTP_POST = 'POST';
const HTTP_PUT = 'PUT';
const HTTP_DELETE = 'DELETE';

class ApiError extends Error {
    constructor(message, errors = null) {
        super(message);
        this.errors = errors;
    }
}

const handleError = async (response) => {
    let errors;
    let message = 'Request failed.';
    if (response.status === 400) {
        const data = await response.json();
        if (typeof data === 'string') {
            throw new ApiError(data);
        }

        message = data.message || message;
        errors = data.errors;
    }

    throw new ApiError(message, errors);
};

const getHeaders = () => {
    const token = sessionStorage.getItem('idToken');

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    return headers;
};

const request = async (method, url, data) => {
    const headers = getHeaders();
    const body = data && JSON.stringify(data);
    const response = await fetch(url, { method, headers, body });
    if (!response.ok) {
        await handleError(response);
    }

    return await response.json();
};

export default {
    get: (url) => request(HTTP_GET, url),
    post: (url, data) => request(HTTP_POST, url, data),
    put: (url, data) => request(HTTP_PUT, url, data),
    delete: (url, data) => request(HTTP_DELETE, url, data),
};
