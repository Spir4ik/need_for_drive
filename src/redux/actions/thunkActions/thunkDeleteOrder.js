export const deleteCurrentOrderSuccess = successData => ({
    type: 'DELETE_CURRENT_ORDER_SUCCESS',
    payload: {
        successData
    }
});

export const deleteCurrentOrderStarted = () => ({
    type: 'DELETE_CURRENT_ORDER_STARTED',
});

export const deleteCurrentOrderFailed = error => ({
    type: 'DELETE_CURRENT_ORDER_FAILURE',
    payload: {
        error
    }
});