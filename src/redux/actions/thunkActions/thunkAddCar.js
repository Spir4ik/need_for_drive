export const getCarsSuccess = car => ({
    type: 'ADD_CAR_SUCCESS',
    payload: {
        car
    }
});

export const getCarsStarted = () => ({
    type: 'ADD_CAR_STARTED',
});

export const getCarsFailed = error => ({
    type: 'ADD_CAR_FAILURE',
    payload: {
        error
    }
});