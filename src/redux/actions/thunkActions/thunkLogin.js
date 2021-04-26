export const loginSuccess = loginData => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        loginData
    }
});

export const loginStarted = () => ({
    type: 'LOGIN_STARTED',
});

export const loginFailed = error => ({
    type: 'LOGIN_FAILURE',
    payload: {
        error
    }
});