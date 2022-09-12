const jwt_decode = require('jwt-decode');

export const isAuthenticated = () => localStorage.getItem('@peopleview/token') !== null;

// export const isAuthenticatedInactiveToken = () => localStorage.getItem('@peopleview/tokenInactive') !== null;


export const isAdmin = () => {
    if (isAuthenticated()) {
        const token = jwt_decode(getToken());
        if (token.user.role === 'admin' || token.user.role === 'manager'  || token.user.role === 'master') {
            return true;
        }
    }
    return false;
    // else
    // if (isAuthenticatedInactiveToken()) {
    //     const tokenInactive = jwt_decode(getTokenInactive());
    //     if (tokenInactive.user.role === 'admin') {
    //         return true;
    //     }
    // }
    // else {
    //     return false;
    // }

};

export const isManager = () => {
    if (isAuthenticated()) {
        const token = jwt_decode(getToken());
        if (token.user.role === 'manager') {
            return true;
        }
    }
    return false;
};

export const getToken         = () => localStorage.getItem('@peopleview/token');
// export const getTokenInactive = () => localStorage.getItem('@peopleview/tokenInactive');

export const decodeToken = () => {

    if (localStorage.getItem('@peopleview/token')) {
        return jwt_decode(localStorage.getItem('@peopleview/token'));
    }
    return null;
    // else
    // if (localStorage.getItem('@peopleview/tokenInactive')) {
    //     return jwt_decode(localStorage.getItem('@peopleview/tokenInactive'));
    // }
    // else {
    //     return null;
    // }

};
