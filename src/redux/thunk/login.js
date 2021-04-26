import login from "../../api/login";
import {loginSuccess, loginStarted, loginFailed} from "../actions/thunkActions/thunkLogin"

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