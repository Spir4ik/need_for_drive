export const currentOrderSuccess = currentOrder => ({
    type: 'CURRENT_ORDER_SUCCESS',
    payload: {
        currentOrder
    }
});

export const currentOrderStarted = () => ({
    type: 'CURRENT_ORDER_STARTED',
});

export const currentOrderFailed = error => ({
    type: 'CURRENT_ORDER_FAILURE',
    payload: {
        error
    }
});