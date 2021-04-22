const initialStateCurrentOrder = {
    loading: false,
    currentOrder: [],
    error: null
};

export default function currentOrderReducer(state = initialStateCurrentOrder, action) {
    switch (action.type) {
        case 'CURRENT_ORDER_STARTED':
            return {
                ...state,
                loading: true,
                currentOrder: []
            };
        case 'CURRENT_ORDER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                currentOrder: action.payload.currentOrder
            };
        case 'CURRENT_ORDER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}