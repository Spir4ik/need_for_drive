export const getPointSuccess = point => ({
    type: 'ADD_POINT_SUCCESS',
    payload: {
        point
    }
});

export const getPointStarted = () => ({
    type: 'ADD_POINT_STARTED',
});

export const getPointFailed = error => ({
    type: 'ADD_POINT_FAILURE',
    payload: {
        error
    }
});