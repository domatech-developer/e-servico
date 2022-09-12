const jwt_decode = require('jwt-decode');

export const isAuthenticated = () => localStorage.getItem('@peopleview/token') !== null;

export const isAdmin = () => {
    if (isAuthenticated()) {
        const token = jwt_decode(getToken());
        if (token.user.role === 'admin') {
            return true;
        }
    }
    return false;
};

export const isManager = () => {
    if (isAuthenticated()) {
        const token = jwt_decode(getToken());
        if (token.user.role === 'admin' || token.user.role === 'manager') {
            return true;
        }
    }
    return false;
};

export const getToken = () => localStorage.getItem('@peopleview/token');

export const decodeToken = () => {
    if (localStorage.getItem('@peopleview/token'))
        return jwt_decode(localStorage.getItem('@peopleview/token'));
    return null;
};
