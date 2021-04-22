const initialStateRate = {
    loading: false,
    rate: [],
    error: null
};

export default function rateReducer(state = initialStateRate, action) {
    switch (action.type) {
        case 'ADD_RATE_STARTED':
            return {
                ...state,
                loading: true,
                rate: []
            };
        case 'ADD_RATE_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                rate: action.payload.rate
            };
        case 'ADD_RATE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}