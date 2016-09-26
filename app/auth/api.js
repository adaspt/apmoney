import http from '../utils/http';

export const login = async (googleIdToken) => {
    const url = 'api/sessions';
    const response = await http.post(url, { googleIdToken });
    sessionStorage.setItem('idToken', response.idToken);

    return response;
};