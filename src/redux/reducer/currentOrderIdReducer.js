const initialStateOrderId = {
    loading: false,
    currentOrderId: '',
    error: null
};

export default function currentOrderIdReducer(state = initialStateOrderId, action) {
    switch (action.type) {
        case 'POST_STARTED':
            return {
                ...state,
                loading: true,
                currentOrderId: ''
            };
        case 'POST_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                currentOrderId: action.payload.currentOrderId
            };
        case 'POST_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}