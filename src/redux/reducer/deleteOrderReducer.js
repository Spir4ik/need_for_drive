const initialStateDeleteCurrentOrder = {
    loading: false,
    successData: [],
    error: null
}

export default function deleteCurrentOrderReducer(state = initialStateDeleteCurrentOrder, action) {
    switch (action.type) {
        case 'DELETE_CURRENT_ORDER_STARTED':
            return {
                ...state,
                loading: true,
                successData: []
            };
        case 'DELETE_CURRENT_ORDER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                successData: action.payload.successData
            };
        case 'DELETE_CURRENT_ORDER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}