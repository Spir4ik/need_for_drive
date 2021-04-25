import login from "../../api/login";

export default function fetchLogin() {
    return dispatch => {
        dispatch(loginStarted());
        try {
            (async () => {
                const result = await login();
                dispatch(loginSuccess(result))
            })()
        } catch(e) {
            dispatch(loginFailed(e.message))
        }
    }
};

const loginSuccess = loginData => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        loginData
    }
});

const loginStarted = () => ({
    type: 'LOGIN_STARTED',
});

const loginFailed = error => ({
    type: 'LOGIN_FAILURE',
    payload: {
        error
    }
});