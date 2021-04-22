import login from "../../api/login";

export default function fetchLogin() {
    return dispatch => {
        dispatch(loginStarted());

        login(
            response => {
                dispatch(loginSuccess(response.access_token));
            },
            error => dispatch(loginFailed(error.message))
        )
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