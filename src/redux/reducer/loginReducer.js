const initialStateLogin = {
    loading: false,
    accessToken: '',
    error: null
};


export default function loginReducer(state = initialStateLogin, action) {
    switch (action.type) {
        case 'LOGIN_STARTED':
            return {
                ...state,
                loading: true,
                accessToken: ''
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                accessToken: action.payload.loginData
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}