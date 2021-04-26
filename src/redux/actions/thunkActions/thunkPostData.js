export const postSuccess = currentOrderId => ({
    type: 'POST_SUCCESS',
    payload: {
        currentOrderId
    }
});

export const postStarted = () => ({
    type: 'POST_STARTED',
});

export const postFailed = error => ({
    type: 'POST_FAILURE',
    payload: {
        error
    }
});