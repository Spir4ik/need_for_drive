export const getRateSuccess = rate => ({
    type: 'ADD_RATE_SUCCESS',
    payload: {
        rate
    }
});

export const getRateStarted = () => ({
    type: 'ADD_RATE_STARTED',
});

export const getRateFailed = error => ({
    type: 'ADD_RATE_FAILURE',
    payload: {
        error
    }
});